"use client"

import { useState, useEffect, useRef } from "react"
import { Message } from "@/lib/supabase"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"
import { supabase } from "@/lib/supabase"
import { Bot } from "lucide-react"

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const botId = "default" // We'll make this dynamic later

  useEffect(() => {
    loadMessages()
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const loadMessages = async () => {
    try {
      const { data, error } = await supabase
        .from("messages")
        .select()
        .eq("bot_id", botId)
        .order("created_at", { ascending: true })

      if (error) throw error
      if (data) {
        setMessages(data)
      }
    } catch (error) {
      console.error("Error loading messages:", error)
    }
  }

  const handleSend = async (content: string) => {
    if (!content.trim() || isLoading) return
    setIsLoading(true)

    try {
      // Save user message
      const userMessage: Partial<Message> = {
        bot_id: botId,
        role: "user",
        content,
      }

      const { data: savedUserMessage, error: userError } = await supabase
        .from("messages")
        .insert([userMessage])
        .select()
        .single()

      if (userError) throw userError
      if (savedUserMessage) {
        setMessages((prev) => [...prev, savedUserMessage])
      }

      // Get AI response
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          botId,
        }),
      })

      if (!response.ok) throw new Error("Failed to get AI response")

      const aiResponse = await response.json()

      // Save AI message
      const aiMessage: Partial<Message> = {
        bot_id: botId,
        role: "assistant",
        content: aiResponse.content,
      }

      const { data: savedAiMessage, error: aiError } = await supabase
        .from("messages")
        .insert([aiMessage])
        .select()
        .single()

      if (aiError) throw aiError
      if (savedAiMessage) {
        setMessages((prev) => [...prev, savedAiMessage])
      }
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col rounded-lg border bg-gradient-to-b from-gray-900 to-gray-800 text-card-foreground shadow-xl">
      {messages.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Bot className="h-12 w-12 mx-auto text-primary animate-pulse" />
            <h3 className="text-lg font-semibold">Start a conversation</h3>
            <p className="text-sm text-gray-400 max-w-sm">
              Ask anything! Your AI assistant is ready to help with questions, tasks, or just casual conversation.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex items-center justify-center py-2">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}
      <div className="border-t border-gray-800 p-4 bg-gray-900/50 backdrop-blur-sm">
        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  )
}