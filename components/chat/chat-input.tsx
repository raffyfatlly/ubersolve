"use client"

import { useState } from "react"
import { Send } from "lucide-react"

interface ChatInputProps {
  onSend: (message: string) => void
  isLoading: boolean
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    onSend(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex h-10 w-full rounded-lg border border-gray-800 bg-gray-800/50 px-4 py-2 text-sm shadow-sm backdrop-blur-sm transition-colors placeholder:text-gray-400 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isLoading}
      />
      <button
        type="submit"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isLoading}
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}