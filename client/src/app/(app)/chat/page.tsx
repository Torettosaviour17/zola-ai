import { ChatWelcome } from "@/components/chat/ChatWelcome";
import { ChatMessages } from "@/components/chat/ChatMessages";
import { ChatInput } from "@/components/chat/ChatInput";

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col">
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
