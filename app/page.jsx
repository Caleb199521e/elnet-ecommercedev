import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import Benefits from "@/components/home/benefits"
import Testimonials from "@/components/home/testimonials"
import CallToAction from "@/components/shared/call-to-action"
import "@/styles/home.css"

export default function HomePage() {
  return (
    <main className="home-page">
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <CallToAction title="Ready to experience lightning-fast internet?" buttonText="Check Plans" buttonLink="/plans" />
    </main>
  )
}
