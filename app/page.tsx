import { HeroSection } from "@/components/hero/hero-section"
import { Navbar } from "@/components/layout/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <Navbar />
      <HeroSection />
    </div>
  )
}
