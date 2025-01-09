import { HeroSection } from "@/components/hero/hero-section"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FeaturesSection } from "@/components/features/features-section"
import { LightFastSection } from "@/components/features/light-fast-section"
import { LightFastSection2 } from "@/components/features/light-fast-section-2"
import { LightFastSection3 } from "@/components/features/light-fast-section-3"
import { PriceSection } from "@/components/features/price-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LightFastSection />
      <LightFastSection2 />
      <LightFastSection3 />
      <PriceSection />
      <Footer />
    </div>
  )
}
