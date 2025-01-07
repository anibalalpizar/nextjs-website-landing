import Image from "next/image"
import { motion } from "framer-motion"

export function HeroImage() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-[500px] relative">
        <Image
          src="/hero.svg"
          alt="Hero illustration"
          fill
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  )
}
