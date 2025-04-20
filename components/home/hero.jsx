import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Fast, Reliable, Affordable Internet for Everyone</h1>
        <p className="hero-subtitle">
          Experience the next generation of connectivity with EL Net's cutting-edge fiber and wireless solutions.
        </p>
        <div className="hero-cta">
          <Link href="/plans" className="cta-button primary">
            Check Plans
          </Link>
          <Link href="/services" className="cta-button secondary">
            Learn More <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-image-container"></div>
      </div>
    </section>
  )
}
