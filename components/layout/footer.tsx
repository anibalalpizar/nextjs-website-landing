"use client"

import Link from "next/link"
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-8 mb-6 md:mb-0">
            <Link
              href="#"
              className="text-[#505F98] hover:text-[#505F98]/80 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-[#505F98] hover:text-[#505F98]/80 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-[#505F98] hover:text-[#505F98]/80 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="text-2xl font-bold text-[#505F98] mb-6 md:mb-0">
            Landing
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-[#505F98] hover:text-[#505F98]/80 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center md:text-left text-sm text-[#505F98]">
          ©2023 Yourcompany
        </div>
      </div>
    </footer>
  )
}
