"use client"

import { useState, useEffect } from "react"
import { Bot, Wand2 } from "lucide-react"
import { supabase } from "@/lib/supabase"
import type { Bot as BotType } from "@/lib/supabase"

export function BotSettings() {
  const [settings, setSettings] = useState<Partial<BotType>>({
    name: "Test Agent",
    description: "A helpful AI assistant",
    model: "openai/gpt-3.5-turbo",
  })
  const botId = "default" // We'll make this dynamic later

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      const { data } = await supabase
        .from("bots")
        .select()
        .eq("id", botId)
        .single()

      if (data) {
        setSettings(data)
      }
    } catch (error) {
      console.error("Error loading bot settings:", error)
    }
  }

  const updateSettings = async (updates: Partial<BotType>) => {
    try {
      const { data, error } = await supabase
        .from("bots")
        .upsert([{ id: botId, ...settings, ...updates }])
        .select()
        .single()

      if (error) throw error
      if (data) {
        setSettings(data)
      }
    } catch (error) {
      console.error("Error updating bot settings:", error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Bot Settings</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Name
              </label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => updateSettings({ name: e.target.value })}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Description
              </label>
              <textarea
                value={settings.description}
                onChange={(e) => updateSettings({ description: e.target.value })}
                className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Model
              </label>
              <select
                value={settings.model}
                onChange={(e) => updateSettings({ model: e.target.value })}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="openai/gpt-3.5-turbo">GPT-3.5 Turbo</option>
                <option value="openai/gpt-4">GPT-4</option>
                <option value="anthropic/claude-2">Claude 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Personality</h3>
          <div className="space-y-4">
            <button 
              onClick={() => {
                // We'll implement personality generation later
                console.log("Generate personality clicked")
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 w-full"
            >
              <Wand2 className="mr-2 h-4 w-4" />
              Generate Personality
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}