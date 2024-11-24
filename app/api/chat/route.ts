import { NextResponse } from "next/server"
import { OpenRouter } from "openrouter"

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY!,
})

export async function POST(req: Request) {
  try {
    const { messages, botId } = await req.json()

    const response = await openrouter.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      temperature: 0.7,
      max_tokens: 1000,
    })

    const reply = response.choices[0].message

    return NextResponse.json(reply)
  } catch (error: any) {
    console.error("Chat API Error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to process chat request" },
      { status: 500 }
    )
  }
}