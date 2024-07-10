import React from "react"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import Skill from "@/components/Skill"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 md:py-24">
      <Hero/>
      <Portfolio/>
      <Skill/>
    </main>
  )
}
