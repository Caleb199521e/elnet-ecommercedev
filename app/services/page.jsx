import PageHeader from "@/components/shared/page-header"
import ServiceDetail from "@/components/services/service-detail"
import CallToAction from "@/components/shared/call-to-action"
import "@/styles/services.css"

export default function ServicesPage() {
  const services = [
    {
      id: "fiber",
      title: "Fiber-Optic Internet",
      description:
        "Experience lightning-fast speeds with our state-of-the-art fiber-optic network. Perfect for streaming, gaming, and working from home.",
      icon: "wifi",
      features: ["Speeds up to 10 Gbps", "Unlimited data", "Low latency", "99.9% uptime guarantee"],
      priceFrom: 49.99,
    },
    {
      id: "wireless",
      title: "Wireless Broadband",
      description:
        "Reliable internet access without the need for cables. Ideal for rural areas and locations where fiber isn't available yet.",
      icon: "radio",
      features: ["Speeds up to 500 Mbps", "Easy installation", "Flexible plans", "No landline required"],
      priceFrom: 39.99,
    },
    {
      id: "voip",
      title: "VoIP Services",
      description:
        "Crystal-clear voice calls over the internet. Save on your phone bills while enjoying premium features.",
      icon: "phone",
      features: ["Unlimited calling", "Video conferencing", "Virtual numbers", "Business integrations"],
      priceFrom: 19.99,
    },
    {
      id: "smart-home",
      title: "Smart Home Integration",
      description:
        "Connect and control all your smart devices with our integrated solutions. Make your home smarter and more efficient.",
      icon: "home",
      features: ["Device management", "Automation", "Security monitoring", "Energy optimization"],
      priceFrom: 29.99,
    },
    {
      id: "mobile-data",
      title: "Mobile Data Plans",
      description:
        "Stay connected on the go with our affordable and reliable mobile data plans. Perfect for smartphones and tablets.",
      icon: "wifi", // Reusing the WiFi icon for mobile data
      features: ["4G/5G connectivity", "Flexible data packages", "No contracts", "Nationwide coverage"],
      priceFrom: 9.99,
    },
  ]

  return (
    <main className="services-page">
      <PageHeader title="Our Services" subtitle="Comprehensive connectivity solutions for homes and businesses" />

      <section className="services-container">
        {services.map((service) => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </section>

      <CallToAction
        title="Find the perfect service for your needs"
        buttonText="View Plans & Pricing"
        buttonLink="/plans"
      />
    </main>
  )
}
