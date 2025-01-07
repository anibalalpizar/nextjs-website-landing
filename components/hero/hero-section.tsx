import { HeroContent } from "./hero-content"
import { HeroImage } from "./hero-image"

export function HeroSection() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 relative">
      <div className="absolute top-0 right-0 w-3/4 h-full bg-[#E7ECFF] rounded-bl-[200px] -z-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <HeroContent />
        <div className="relative z-10">
          <HeroImage />
        </div>
      </div>
    </div>
  )
}
