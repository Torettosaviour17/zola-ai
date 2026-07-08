import React from "react";
import { ChatMessage } from "./ChatMessage";

export function ChatWindow() {
  return (
    <div className="space-y-3">
      <ChatMessage
        role="assistant"
        content="Hello! I can help with your project."
      />
      <ChatMessage role="user" content="Show me the latest updates." />
    </div>
  );
}
