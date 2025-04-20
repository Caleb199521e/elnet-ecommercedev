import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import "@/styles/globals.css"

export const metadata = {
  title: "EL Net - Fast, Reliable, Affordable Internet",
  description:
    "EL Net is a digital-first Internet Service Provider offering fiber internet, wireless broadband, VoIP, and smart home integration services.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
