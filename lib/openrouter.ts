import { OpenRouter } from "openrouter"

if (!process.env.OPENROUTER_API_KEY) {
  throw new Error("Missing OPENROUTER_API_KEY environment variable")
}

export const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
})

export const availableModels = [
  {
    id: "openai/gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    maxTokens: 4096,
  },
  {
    id: "openai/gpt-4",
    name: "GPT-4",
    maxTokens: 8192,
  },
  {
    id: "anthropic/claude-2",
    name: "Claude 2",
    maxTokens: 100000,
  },
] as const