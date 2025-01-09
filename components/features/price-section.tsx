"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function PriceSection() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.h2
          variants={titleVariants}
          className="text-4xl md:text-5xl font-bold text-[#091133] mb-4"
        >
          A Price To Suit Everyone
        </motion.h2>
        <motion.p
          variants={titleVariants}
          className="text-[#505F98] max-w-2xl mx-auto mb-16"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus.
        </motion.p>

        <motion.div
          variants={cardVariants}
          className="max-w-md mx-auto text-center"
        >
          <h3 className="text-6xl font-bold text-[#222F65] mb-2">$40</h3>
          <p className="text-[#505F98] mb-4">UI Design Kit</p>
          <p className="text-[#505F98] mb-8">See, One price. Simple.</p>
          <Button
            size="lg"
            className="w-full max-w-[200px] bg-[#111B47] hover:bg-[#111B47]/90 text-white"
          >
            Purchase Now
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
