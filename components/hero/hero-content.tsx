import { Button } from "@/components/ui/button"

export function HeroContent() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold text-[#091133] leading-tight">
        Introduce Your Product Quickly & Effectively
      </h1>
      <p className="text-lg text-[#505F98] md:pr-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus.
      </p>
      <div className="flex space-x-4">
        <Button
          size="lg"
          className="bg-[#111B47] hover:bg-[#111B47]/90 text-white"
        >
          Purchase UI Kit
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-[#091133] text-[#091133] hover:bg-[#091133]/10"
        >
          Learn More
        </Button>
      </div>
    </div>
  )
}
