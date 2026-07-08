import { ChatMessage } from "@/types/chat";

interface Props {
  message: ChatMessage;
}

export function ChatBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xl rounded-2xl px-5 py-3 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
