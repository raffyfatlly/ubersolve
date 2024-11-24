import { ChatInterface } from "@/components/chat/chat-interface"
import { BotSettings } from "@/components/bot/bot-settings"

export default function StudioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold">Test Agent</span>
            <span className="text-xs text-muted-foreground">Draft</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4">
              Deploy
            </button>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[1fr_400px] gap-6">
        <ChatInterface />
        <BotSettings />
      </div>
    </div>
  )
}