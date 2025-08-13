import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send, X } from "lucide-react";
import { sendChat, type ChatMessage } from "@/lib/chatApi";

export const ChatWidget = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      role: "assistant",
      content:
        "Здравствуйте! Я виртуальный помощник Pizza Time. Чем могу помочь: заказ, меню, доставка, часы работы?",
    },
  ]);

  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  const canSend = useMemo(() => input.trim().length > 0 && !pending, [input, pending]);

  const onSend = async () => {
    if (!canSend) return;
    const userMessage: ChatMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setPending(true);
    try {
      const reply = await sendChat([...messages, userMessage]);
      const assistant: ChatMessage = { role: "assistant", content: reply || "Готов помочь!" };
      setMessages((prev) => [...prev, assistant]);
    } catch (e: any) {
      // Локальный фолбэк без подключенного API
      const assistant: ChatMessage = {
        role: "assistant",
        content:
          "ИИ ещё не подключён. Укажите адрес API в src/lib/chatApi.ts (CHAT_API_URL), и я начну отвечать в реальном времени.",
      };
      setMessages((prev) => [...prev, assistant]);
      toast({
        title: "Не удалось связаться с ИИ",
        description: e?.message || "Проверьте адрес API или подключение к сети.",
        variant: "destructive",
      });
    } finally {
      setPending(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <div className="fixed z-50 right-4 bottom-4 md:right-6 md:bottom-6">
        <Button
          size="icon"
          aria-label={open ? "Закрыть чат" : "Открыть чат"}
          className="h-14 w-14 rounded-full shadow-lg"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed z-50 right-4 bottom-24 md:right-6 md:bottom-28 w-[min(92vw,22rem)] h-[28rem] bg-card text-card-foreground border rounded-xl shadow-xl flex flex-col"
          role="dialog"
          aria-label="Чат поддержки Pizza Time"
        >
          <header className="px-4 py-3 border-b flex items-center justify-between">
            <div>
              <h2 className="font-semibold leading-none">Поддержка Pizza Time</h2>
              <p className="text-xs text-muted-foreground">Онлайн-чат</p>
            </div>
            <Button variant="ghost" size="icon" aria-label="Закрыть" onClick={() => setOpen(false)}>
              <X />
            </Button>
          </header>

          <ScrollArea className="flex-1">
            <div ref={viewportRef} className="px-4 py-3 space-y-3 overflow-y-auto h-full">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[85%] rounded-xl px-3 py-2 bg-primary text-primary-foreground"
                        : "max-w-[85%] rounded-xl px-3 py-2 bg-muted text-foreground"
                    }
                  >
                    <p className="text-sm whitespace-pre-wrap">{m.content}</p>
                  </div>
                </div>
              ))}
              {pending && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-xl px-3 py-2 bg-muted text-foreground">
                    <p className="text-sm">Печатает…</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <form
            className="p-3 border-t flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              onSend();
            }}
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Напишите сообщение…"
              aria-label="Сообщение"
              disabled={pending}
            />
            <Button type="submit" size="icon" disabled={!canSend} aria-label="Отправить">
              <Send />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
