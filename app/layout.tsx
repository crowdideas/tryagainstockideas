import type { Metadata } from "next"
import "./global.css"

export const metadata: Metadata = {
  title: "StockPulse",
  description: "A dashboard for aggregating stock ideas from social media.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}