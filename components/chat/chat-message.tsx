import { Message } from "@/lib/supabase"
import { Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === "assistant"

  return (
    <div
      className={cn(
        "group flex gap-3 transition-opacity",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      {isBot && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-primary/10 text-primary ring-1 ring-primary/20">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%] text-sm leading-relaxed",
          isBot
            ? "bg-gray-800/50 text-gray-100 ring-1 ring-white/10"
            : "bg-primary text-primary-foreground"
        )}
      >
        {message.content}
      </div>
      {!isBot && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-primary text-primary-foreground ring-1 ring-primary/20">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  )
}