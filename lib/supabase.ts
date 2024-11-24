import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qnjcatbjkpjwjukjjhne.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuamNhdGJqa3Bqd2p1a2pqaG5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxOTc1MjYsImV4cCI6MjA0Nzc3MzUyNn0.W0wLsR2OL-JMc9GXjrhjHnYEUnqaMsXYK6G6YHwn5vY'

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface Bot {
  id: string
  name: string
  description: string
  model: string
  created_at: string
  updated_at: string
}

export interface Message {
  id: string
  bot_id: string
  role: 'user' | 'assistant'
  content: string
  created_at: string
}

export async function createBot(bot: Partial<Bot>) {
  const { data, error } = await supabase
    .from('bots')
    .insert([bot])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateBot(id: string, updates: Partial<Bot>) {
  const { data, error } = await supabase
    .from('bots')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getBot(id: string) {
  const { data, error } = await supabase
    .from('bots')
    .select()
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function saveMessage(message: Partial<Message>) {
  const { data, error } = await supabase
    .from('messages')
    .insert([message])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getMessages(botId: string) {
  const { data, error } = await supabase
    .from('messages')
    .select()
    .eq('bot_id', botId)
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}