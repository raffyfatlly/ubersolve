import { Bot } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold">ChatBot Studio</span>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <div className="h-full py-6 pl-8 pr-6 lg:py-8">
            <div className="flex flex-col gap-4">
              <Link 
                href="/studio"
                className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-2 text-primary hover:bg-primary/20"
              >
                Create New Bot
              </Link>
            </div>
          </div>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <div className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-4">
            <Bot className="h-16 w-16 text-primary animate-pulse" />
            <h1 className="text-2xl font-bold tracking-tight">Welcome to ChatBot Studio</h1>
            <p className="text-muted-foreground">Create, test, and deploy your AI chatbots</p>
            <Link 
              href="/studio"
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        </main>
      </div>
    </main>
  )
}