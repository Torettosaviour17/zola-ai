"use client";

import { ChatBubble } from "./ChatBubble";
import { ChatWelcome } from "./ChatWelcome";
import { useChatStore } from "@/stores/chatStore";

export function ChatMessages() {
  const { messages } = useChatStore();

  if (messages.length === 0) {
    return (
      <div className="flex-1">
        <ChatWelcome />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-8">
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}
    </div>
  );
}
