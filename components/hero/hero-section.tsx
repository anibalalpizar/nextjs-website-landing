import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export function HeroSection() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
}