import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a
            href="#"
            className="text-[#505F98] hover:text-[#505F98]/80 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#505F98] hover:text-[#505F98]/80 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-[#505F98] hover:text-[#505F98]/80 transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="text-2xl font-bold text-[#505F98]">Landing</div>
        <Button className="bg-[#111B47] hover:bg-[#111B47]/90 text-white">
          Buy Now
        </Button>
      </div>
    </nav>
  )
}
