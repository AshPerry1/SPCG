import {
  assistant,
  getFaqKnowledge,
  knowledgeEntries,
  quickReplies,
  type KnowledgeEntry,
} from "@/lib/chat-knowledge";
import { site } from "@/lib/site";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  suggestions?: string[];
  timestamp: number;
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "do",
  "does",
  "can",
  "you",
  "we",
  "i",
  "my",
  "to",
  "for",
  "of",
  "in",
  "on",
  "it",
  "and",
  "or",
  "what",
  "how",
  "about",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));
}

function scoreEntry(message: string, entry: KnowledgeEntry): number {
  const lower = message.toLowerCase();
  let score = 0;

  for (const keyword of entry.keywords) {
    const kw = keyword.toLowerCase();
    if (lower.includes(kw)) {
      score += kw.includes(" ") ? 4 : 2;
    }
  }

  const msgTokens = tokenize(message);
  const entryTokens = new Set(
    entry.keywords.flatMap((k) => tokenize(k)),
  );
  for (const token of msgTokens) {
    if (entryTokens.has(token)) score += 1;
  }

  return score;
}

function pickBestEntry(message: string): KnowledgeEntry | null {
  const pool = [...knowledgeEntries, ...getFaqKnowledge()];
  let best: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of pool) {
    const score = scoreEntry(message, entry);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return bestScore >= 2 ? best : null;
}

function fallbackResponse(message: string): ChatMessage {
  const trimmed = message.trim();
  return {
    id: crypto.randomUUID(),
    role: "assistant",
    content: `I want to be straight with you — I don't have a verified answer for "${trimmed.slice(0, 80)}${trimmed.length > 80 ? "…" : ""}" in our official info.\n\n${assistant.disclaimer}\n\nBest next step: call ${site.phone} or use the contact form and ${site.owner}'s team will get back to you within one business day.`,
    suggestions: ["How do I get an estimate?", `Email ${site.email}`],
    timestamp: Date.now(),
  };
}

export function createGreeting(): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role: "assistant",
    content: assistant.greeting,
    suggestions: [...quickReplies],
    timestamp: Date.now(),
  };
}

export function generateReply(userMessage: string): ChatMessage {
  const match = pickBestEntry(userMessage);

  if (!match) {
    return fallbackResponse(userMessage);
  }

  return {
    id: crypto.randomUUID(),
    role: "assistant",
    content: match.response,
    suggestions: match.suggestions,
    timestamp: Date.now(),
  };
}

/** Human-like typing delay based on response length */
export function typingDelayMs(text: string): number {
  const base = 500;
  const perChar = 12;
  return Math.min(base + text.length * perChar, 2200);
}

export function createUserMessage(content: string): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role: "user",
    content: content.trim(),
    timestamp: Date.now(),
  };
}
