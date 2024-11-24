"use client"

import { useState, useEffect } from "react"

interface BotSettings {
  name: string
  description: string
  model: string
}

export function useBotSettings(botId: string) {
  const [settings, setSettings] = useState<BotSettings>({
    name: "Test Agent",
    description: "A helpful AI assistant",
    model: "openai/gpt-3.5-turbo",
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const response = await fetch(`/api/bot?botId=${botId}`)
        if (response.ok) {
          const data = await response.json()
          if (data) {
            setSettings(data)
          }
        }
      } catch (error) {
        console.error("Failed to load bot settings:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadSettings()
  }, [botId])

  const updateSettings = async (newSettings: Partial<BotSettings>) => {
    try {
      const response = await fetch("/api/bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          botId,
          settings: { ...settings, ...newSettings },
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update settings")
      }

      const data = await response.json()
      setSettings(data)
    } catch (error) {
      console.error("Failed to update settings:", error)
      // Handle error (you might want to show a toast notification)
    }
  }

  return {
    settings,
    isLoading,
    updateSettings,
  }
}