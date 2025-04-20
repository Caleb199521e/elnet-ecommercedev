import Link from "next/link"
import { Wifi, Radio, Phone, Home } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "fiber",
      title: "Fiber-Optic Internet",
      description: "Lightning-fast speeds up to 10 Gbps with our state-of-the-art fiber network.",
      icon: <Wifi size={32} />,
    },
    {
      id: "wireless",
      title: "Wireless Broadband",
      description: "Reliable connectivity without cables, perfect for areas without fiber access.",
      icon: <Radio size={32} />,
    },
    {
      id: "voip",
      title: "VoIP Services",
      description: "Crystal-clear voice calls over the internet at a fraction of traditional costs.",
      icon: <Phone size={32} />,
    },
    {
      id: "smart-home",
      title: "Smart Home Integration",
      description: "Connect and control all your smart devices with our integrated solutions.",
      icon: <Home size={32} />,
    },
  ]

  return (
    <section className="services-section">
      <div className="section-header">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive connectivity solutions for homes and businesses</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <Link href={`/services#${service.id}`} className="service-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <Link href="/services" className="cta-button secondary">
          View All Services
        </Link>
      </div>
    </section>
  )
}
