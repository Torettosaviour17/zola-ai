"use client";

import { useState } from "react";
import { ImagePlus, Mic, SendHorizontal } from "lucide-react";
import { useChatStore } from "@/stores/chatStore";

export function ChatInput() {
  const [text, setText] = useState("");
  const { addMessage } = useChatStore();

  const handleSend = () => {
    if (!text.trim()) return;

    addMessage({
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      createdAt: new Date(),
    });

    setText("");
  };

  return (
    <div className="border-t bg-background p-4">
      <div className="flex items-center gap-3 rounded-xl border p-3">
        <button>
          <ImagePlus className="h-5 w-5" />
        </button>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="flex-1 bg-transparent outline-none"
          placeholder="Describe your video..."
        />

        <button>
          <Mic className="h-5 w-5" />
        </button>

        <button onClick={handleSend}>
          <SendHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
