import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CallToAction({ title, buttonText, buttonLink }) {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">{title}</h2>
        <Link href={buttonLink} className="cta-button primary">
          {buttonText} <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </section>
  )
}
