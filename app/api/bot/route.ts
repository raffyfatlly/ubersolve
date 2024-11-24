import { NextResponse } from "next/server"
import { saveBotSettings, getBotSettings } from "@/lib/kv"

export async function POST(req: Request) {
  try {
    const { botId, settings } = await req.json()
    const savedSettings = await saveBotSettings(botId, settings)
    return NextResponse.json(savedSettings)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to save bot settings" },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const botId = searchParams.get("botId")
    
    if (!botId) {
      return NextResponse.json(
        { error: "Bot ID is required" },
        { status: 400 }
      )
    }

    const settings = await getBotSettings(botId)
    return NextResponse.json(settings)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to get bot settings" },
      { status: 500 }
    )
  }
}