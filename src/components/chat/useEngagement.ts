"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  engagementConfig,
  sectionNudges,
} from "@/lib/chat-knowledge";

export type ProactiveNudge = {
  id: string;
  message: string;
  suggestions: string[];
  source: "idle" | "section";
};

const STORAGE_KEY = "spcg-chat-engagement";

type EngagementState = {
  proactiveCount: number;
  lastNudgeAt: number;
  dismissedIds: string[];
};

function loadState(): EngagementState {
  if (typeof window === "undefined") {
    return { proactiveCount: 0, lastNudgeAt: 0, dismissedIds: [] };
  }
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as EngagementState;
  } catch {
    /* ignore */
  }
  return { proactiveCount: 0, lastNudgeAt: 0, dismissedIds: [] };
}

function saveState(state: EngagementState) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

export function useEngagement(options: {
  chatOpen: boolean;
  onNudge: (nudge: ProactiveNudge) => void;
}) {
  const { chatOpen, onNudge } = options;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const stateRef = useRef(loadState());
  const lastActivityRef = useRef(Date.now());
  const sectionEnteredRef = useRef(Date.now());
  const prevSectionRef = useRef<string | null>(null);
  const pageReadyRef = useRef(false);
  const firedRef = useRef<Set<string>>(new Set());

  const canNudge = useCallback(() => {
    const s = stateRef.current;
    if (chatOpen) return false;
    if (s.proactiveCount >= engagementConfig.maxProactivePerSession) return false;
    if (!pageReadyRef.current) return false;
    const sinceLast = Date.now() - s.lastNudgeAt;
    if (s.lastNudgeAt && sinceLast < engagementConfig.minGapBetweenNudgesMs) {
      return false;
    }
    return true;
  }, [chatOpen]);

  const emitNudge = useCallback(
    (nudge: Omit<ProactiveNudge, "id">) => {
      if (!canNudge()) return;
      const id = `${nudge.source}-${nudge.message.slice(0, 24)}`;
      if (firedRef.current.has(id)) return;
      if (stateRef.current.dismissedIds.includes(id)) return;

      firedRef.current.add(id);
      stateRef.current = {
        ...stateRef.current,
        proactiveCount: stateRef.current.proactiveCount + 1,
        lastNudgeAt: Date.now(),
      };
      saveState(stateRef.current);
      onNudge({ ...nudge, id });
    },
    [canNudge, onNudge],
  );

  const recordActivity = useCallback(() => {
    lastActivityRef.current = Date.now();
  }, []);

  const dismissNudge = useCallback((id: string) => {
    stateRef.current = {
      ...stateRef.current,
      dismissedIds: [...stateRef.current.dismissedIds, id],
    };
    saveState(stateRef.current);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => {
      pageReadyRef.current = true;
    }, engagementConfig.initialDelayMs);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const events = ["mousedown", "keydown", "scroll", "touchstart"] as const;
    const handler = () => recordActivity();
    events.forEach((e) =>
      window.addEventListener(e, handler, { passive: true }),
    );
    return () => events.forEach((e) => window.removeEventListener(e, handler));
  }, [recordActivity]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "main section[id], main [data-chat-section]",
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio >= 0.35)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id =
            visible[0].target.getAttribute("data-chat-section") ||
            visible[0].target.id;
          if (id && id !== prevSectionRef.current) {
            prevSectionRef.current = id;
            sectionEnteredRef.current = Date.now();
          }
          setActiveSection(id || null);
        }
      },
      { threshold: [0.35, 0.5, 0.65], rootMargin: "-10% 0px -10% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!canNudge()) return;

      const idleFor = Date.now() - lastActivityRef.current;
      const sectionFor = Date.now() - sectionEnteredRef.current;

      if (
        idleFor >= engagementConfig.idleMs &&
        !firedRef.current.has("idle-global")
      ) {
        emitNudge({
          source: "idle",
          message:
            "Still exploring? I'm here if you have questions about our Alabama construction services — no obligation.",
          suggestions: [
            "How do I get an estimate?",
            "What services do you offer?",
          ],
        });
        firedRef.current.add("idle-global");
        return;
      }

      if (
        activeSection &&
        sectionFor >= engagementConfig.sectionStuckMs &&
        sectionNudges[activeSection]
      ) {
        const nudge = sectionNudges[activeSection];
        emitNudge({
          source: "section",
          message: nudge.message,
          suggestions: [...nudge.suggestions],
        });
      }
    }, 5000);

    return () => window.clearInterval(interval);
  }, [activeSection, canNudge, emitNudge]);

  return { dismissNudge, recordActivity, activeSection };
}
