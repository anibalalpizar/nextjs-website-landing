import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Landing - Modern Landing Page Template",
  description:
    "A modern, responsive landing page template built with Next.js 15, Tailwind CSS, and Framer Motion. Perfect for SaaS, products, or services.",
  keywords: [
    "landing page",
    "next.js template",
    "react template",
    "tailwind template",
    "framer motion",
  ],
  authors: [{ name: "Aníbal Alpízar" }],
  creator: "Aníbal Alpízar",
  publisher: "Aníbal Alpízar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextjs-website-landing.vercel.app/",
    siteName: "Landing",
    title: "Landing - Modern Landing Page Template",
    description:
      "A modern, responsive landing page template built with Next.js 14, Tailwind CSS, and Framer Motion.",
    images: [
      {
        url: "https://nextjs-website-landing.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Landing Page Template Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing - Modern Landing Page Template",
    description:
      "A modern, responsive landing page template built with Next.js 15, Tailwind CSS, and Framer Motion.",
    images: ["https://nextjs-website-landing.vercel.app/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://nextjs-website-landing.vercel.app/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
