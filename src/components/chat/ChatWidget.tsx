"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  assistant,
  quickReplies,
} from "@/lib/chat-knowledge";
import {
  createGreeting,
  createUserMessage,
  generateReply,
  typingDelayMs,
  type ChatMessage,
} from "@/lib/chat-engine";
import { site } from "@/lib/site";
import {
  useEngagement,
  type ProactiveNudge,
} from "@/components/chat/useEngagement";

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          isUser
            ? "rounded-br-md bg-brand text-white"
            : "rounded-bl-md bg-surface text-foreground ring-1 ring-border"
        }`}
      >
        {!isUser && (
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-brand">
            {assistant.name} · {assistant.role}
          </p>
        )}
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start" aria-live="polite" aria-label="Taylor is typing">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-surface px-4 py-3 ring-1 ring-border">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 animate-bounce rounded-full bg-brand/50"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const [nudge, setNudge] = useState<ProactiveNudge | null>(null);
  const [hasGreeted, setHasGreeted] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || typing) return;

      setNudge(null);
      const userMsg = createUserMessage(trimmed);
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setTyping(true);
      scrollToBottom();

      const reply = generateReply(trimmed);
      await new Promise((r) => setTimeout(r, typingDelayMs(reply.content)));

      setTyping(false);
      setMessages((prev) => [...prev, reply]);
      if (!open) setUnread((u) => u + 1);
      scrollToBottom();
    },
    [open, scrollToBottom, typing],
  );

  const handleNudge = useCallback(
    (n: ProactiveNudge) => {
      if (open) return;
      setNudge(n);
    },
    [open],
  );

  const { dismissNudge, recordActivity } = useEngagement({
    chatOpen: open,
    onNudge: handleNudge,
  });

  const openChat = useCallback(() => {
    setOpen(true);
    setUnread(0);
    setNudge(null);
    if (!hasGreeted) {
      setHasGreeted(true);
      setMessages([createGreeting()]);
    }
    setTimeout(() => inputRef.current?.focus(), 300);
  }, [hasGreeted]);

  const closeChat = useCallback(() => {
    setOpen(false);
    recordActivity();
  }, [recordActivity]);

  useEffect(() => {
    if (open) scrollToBottom();
  }, [open, messages, typing, scrollToBottom]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
    recordActivity();
  };

  const openNudgeInChat = () => {
    if (nudge) {
      openChat();
      if (nudge.suggestions[0]) {
        setTimeout(() => sendMessage(nudge.suggestions[0]), 400);
      }
      setNudge(null);
    }
  };

  return (
    <>
      {/* Proactive nudge — subtle, dismissible */}
      {nudge && !open && (
        <div
          className="fixed bottom-[5.5rem] left-4 right-4 z-[48] animate-in fade-in slide-in-from-bottom-2 sm:bottom-24 sm:left-auto sm:right-6 sm:max-w-sm"
          role="status"
          aria-live="polite"
        >
          <div className="rounded-2xl bg-surface-elevated p-4 shadow-lg ring-1 ring-border">
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                  {assistant.name[0]}
                </span>
                <div>
                  <p className="text-xs font-semibold text-brand">
                    {assistant.name} · {site.shortName}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    {nudge.message}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  dismissNudge(nudge.id);
                  setNudge(null);
                }}
                className="shrink-0 rounded-full p-1 text-muted-light hover:bg-surface hover:text-foreground"
                aria-label="Dismiss"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={openNudgeInChat}
                className="rounded-full bg-brand px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-brand-light"
              >
                Chat with {assistant.name}
              </button>
              <button
                type="button"
                onClick={() => {
                  dismissNudge(nudge.id);
                  setNudge(null);
                }}
                className="rounded-full px-3.5 py-1.5 text-xs font-medium text-muted hover:text-foreground"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-end sm:justify-end sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Chat with ${assistant.name}`}
        >
          <button
            type="button"
            className="absolute inset-0 bg-foreground/20 backdrop-blur-[2px]"
            aria-label="Close chat"
            onClick={closeChat}
          />
          <div className="relative flex h-[min(85dvh,560px)] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-background shadow-2xl ring-1 ring-border sm:h-[min(70vh,520px)] sm:rounded-2xl">
            <header className="flex items-center justify-between border-b border-border bg-brand px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-bold">
                  {assistant.name[0]}
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-brand bg-emerald-400" title="Available during business hours" />
                </span>
                <div>
                  <p className="font-semibold">{assistant.name}</p>
                  <p className="text-xs text-white/75">
                    {assistant.role} · {site.shortName}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeChat}
                className="rounded-full p-2 hover:bg-white/10"
                aria-label="Close chat"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>

            <div
              ref={listRef}
              className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
            >
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}
              {typing && <TypingIndicator />}
            </div>

            {messages.length > 0 &&
              messages[messages.length - 1].role === "assistant" &&
              messages[messages.length - 1].suggestions &&
              !typing && (
                <div className="flex flex-wrap gap-2 border-t border-border px-4 py-2">
                  {messages[messages.length - 1].suggestions!.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => {
                        recordActivity();
                        if (s.startsWith("Call") || s.startsWith("Email")) {
                          if (s.startsWith("Call")) window.location.href = site.phoneHref;
                          else window.location.href = `mailto:${site.email}`;
                          return;
                        }
                        if (s.toLowerCase().includes("contact form")) {
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                          return;
                        }
                        sendMessage(s);
                      }}
                      className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-brand ring-1 ring-border hover:bg-brand/5"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

            <form
              onSubmit={handleSubmit}
              className="border-t border-border p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about services, estimates, areas…"
                  className="min-h-11 flex-1 rounded-full border border-border bg-surface px-4 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  autoComplete="off"
                  maxLength={500}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="flex min-h-11 min-w-11 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-light disabled:opacity-40"
                  aria-label="Send message"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-muted-light">
                Answers based on official {site.shortName} info · Not a substitute for on-site quotes
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Launcher */}
      <button
        type="button"
        onClick={open ? closeChat : openChat}
        className={`fixed z-[50] flex items-center gap-2 rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${
          open
            ? "bottom-[5.5rem] right-4 h-12 w-12 justify-center bg-foreground text-white sm:bottom-6"
            : "bottom-[5.5rem] right-4 bg-brand px-4 py-3 text-white sm:bottom-6 sm:px-5"
        }`}
        aria-expanded={open}
        aria-label={open ? "Close chat" : `Chat with ${assistant.name}`}
      >
        {!open && (
          <>
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm font-bold">
              {assistant.name[0]}
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-brand bg-emerald-400" />
            </span>
            <span className="hidden text-sm font-semibold sm:inline">Ask {assistant.name}</span>
          </>
        )}
        {open ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="h-5 w-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {!open && unread > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-brand">
            {unread}
          </span>
        )}
      </button>
    </>
  );
}
