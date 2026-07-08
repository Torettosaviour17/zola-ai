import { ChatBubble } from "./ChatBubble";
import type { ChatMessage as ChatMessageType } from "@/types/chat";

type ChatMessageProps = {
  role: "assistant" | "user";
  content: string;
};

export function ChatMessage({ role, content }: ChatMessageProps) {
  const message: ChatMessageType = {
    id: crypto.randomUUID(),
    role,
    content,
    createdAt: new Date(),
  };

  return <ChatBubble message={message} />;
}
