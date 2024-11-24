import { kv } from '@vercel/kv'

if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
  throw new Error("Missing Vercel KV environment variables")
}

export async function saveConversation(botId: string, messages: any[]) {
  const key = `conversation:${botId}`
  await kv.set(key, messages)
  return messages
}

export async function getConversation(botId: string) {
  const key = `conversation:${botId}`
  const messages = await kv.get(key)
  return messages || []
}

export async function saveBotSettings(botId: string, settings: any) {
  const key = `bot:${botId}`
  await kv.set(key, settings)
  return settings
}

export async function getBotSettings(botId: string) {
  const key = `bot:${botId}`
  const settings = await kv.get(key)
  return settings
}