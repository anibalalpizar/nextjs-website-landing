"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

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

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
}

export function PriceSection() {
  const prices = [
    {
      name: "Basic",
      price: "$25",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Pro",
      price: "$50",
      features: ["All Basic features", "Feature 4", "Feature 5"],
    },
    {
      name: "Enterprise",
      price: "$100",
      features: ["All Pro features", "Feature 6", "Feature 7"],
    },
  ]

  return (
    <div className="container mx-auto px-6 py-24 bg-[#E7ECFF] rounded-3xl my-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.h2
          variants={titleVariants}
          className="text-4xl md:text-5xl font-bold text-[#091133] mb-4"
        >
          A Price To Suit Everyone
        </motion.h2>
        <motion.p
          variants={titleVariants}
          className="text-[#505F98] max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prices.map((price, i) => (
          <motion.div
            key={price.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05 }}
            variants={cardVariants}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.div animate={floatingAnimation} className="text-center">
              <h3 className="text-2xl font-bold text-[#091133] mb-4">
                {price.name}
              </h3>
              <p className="text-4xl font-bold text-[#222F65] mb-6">
                {price.price}
              </p>
              <div className="space-y-4 mb-8">
                {price.features.map((feature, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }}
                    viewport={{ once: true }}
                    className="text-[#505F98]"
                  >
                    {feature}
                  </motion.p>
                ))}
              </div>
              <Button
                size="lg"
                className="w-full bg-[#111B47] hover:bg-[#111B47]/90 text-white"
              >
                Purchase Now
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
