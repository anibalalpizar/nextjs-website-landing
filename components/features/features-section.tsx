"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FeaturesSection() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#091133]">
            Light, Fast & Powerful
          </h2>
          <p className="text-[#505F98] md:pr-12">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 relative w-24 h-24"></div>
              <div className="mb-4">
                <Image
                  src="/images/features/square.svg"
                  alt="Feature icon"
                  width={36}
                  height={36}
                />
              </div>
              <h3 className="text-[#091133] font-semibold mb-2">
                Title Goes Here
              </h3>
              <p className="text-[#505F98] text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 relative w-24 h-24"></div>
              <div className="mb-4">
                <Image
                  src="/images/features/square.svg"
                  alt="Feature icon"
                  width={36}
                  height={36}
                />
              </div>
              <h3 className="text-[#091133] font-semibold mb-2">
                Title Goes Here
              </h3>
              <p className="text-[#505F98] text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="relative h-[500px]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/features/light.svg"
            alt="Feature illustration"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  )
}
