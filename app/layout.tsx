import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })




export const metadata: Metadata = {
  title: "Ahmed Alaydi | Full-Stack Developer",
  icons: {
    icon: "/image/myimage.jpeg",
  },
  description:
    "Full-Stack Developer specialized in building scalable and high-performance digital products using Next.js, React, and Laravel.",

  openGraph: {
    title: "Ahmed Alaydi | Full-Stack Developer",
    description: "Building scalable digital products with modern web technologies.",
    // url: "https://ahmedalaydi.com",
    siteName: "Ahmed Alaydi Portfolio",
    images: [
      {
        url: "/image/myimage.jpeg",
        width: 1200,
        height: 630,
        alt: "Ahmed Alaydi - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahmed Alaydi | Full-Stack Developer",
    description: "Full-Stack Developer | Next.js • React • Laravel",
    images: ["/image/myimage.jpeg"],
  },

  authors: [{ name: "Ahmed Alaydi" }],
  keywords: ["Full-Stack Developer", "Next.js", "React", "Laravel"],
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1115" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
