export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

// Укажите сюда ваш публичный HTTP endpoint, который обрабатывает чат-запросы.
// Пример: "https://your-domain.com/api/ai-chat" или ссылка на Supabase Edge Function.
export const CHAT_API_URL = "https://jxsmqhjueqffuonwbllp.supabase.co/functions/v1/super-function";

/**
 * Ожидаемый контракт API:
 * POST CHAT_API_URL
 * Body: { messages: Array<{ role: 'user'|'assistant'|'system', content: string }> }
 * Response: { reply: string }  // поле reply обязательно
 */
export async function sendChat(
  messages: ChatMessage[],
  signal?: AbortSignal
): Promise<string> {
  if (!CHAT_API_URL) {
    throw new Error("CHAT_API_URL не настроен. Укажите адрес в src/lib/chatApi.ts");
  }

  const res = await fetch(CHAT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
    signal,
  });

  if (!res.ok) {
    throw new Error(`Ошибка API: ${res.status}`);
  }

  const data = await res.json();
  const reply = data?.reply ?? data?.message ?? data?.output ?? data?.text;
  if (typeof reply !== "string") {
    throw new Error("Некорректный ответ API: не найдено поле reply");
  }
  return reply;
}
