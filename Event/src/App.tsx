import { useEffect, useState } from "react"
import { ArcRevealHero } from "@/components/ui/arc-preloader-hero"
import Swarm from "@/components/swarm"
import { CONTENT } from "@/components/swarm/content"

export default function App() {
  const [ready, setReady] = useState(false)
  const { seo, preloader } = CONTENT

  useEffect(() => {
    document.title = seo.title
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description)
  }, [seo])

  // Keep the page still while the greetings play, then let the crew start building.
  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden"
    if (!ready) window.scrollTo(0, 0)
    return () => {
      document.body.style.overflow = ""
    }
  }, [ready])

  return (
    <ArcRevealHero
      greetings={preloader.greetings}
      greetingHold={preloader.hold}
      revealDuration={preloader.reveal}
      onDone={() => setReady(true)}
      // The page has sticky sections, so the wrapper must not clip. The curtain is fixed to the viewport.
      className="overflow-visible"
      introClassName="fixed"
      greetingClassName="font-[Archivo,'Noto_Sans_Devanagari','Noto_Sans_Tamil','Noto_Sans_Bengali',sans-serif]"
    >
      <Swarm content={CONTENT} start={ready} />
    </ArcRevealHero>
  )
}
