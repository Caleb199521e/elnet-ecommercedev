import Link from "next/link"
import { Wifi, Radio, Phone, Home, Check } from "lucide-react"

// Main component to display service details
export default function ServiceDetail({ service }) {
  // Function to return the appropriate icon based on the icon name
  const getIcon = (iconName) => {
    switch (iconName) {
      case "wifi":
        return <Wifi size={40} /> // WiFi icon
      case "radio":
        return <Radio size={40} /> // Radio icon
      case "phone":
        return <Phone size={40} /> // Phone icon
      case "home":
        return <Home size={40} /> // Home icon
      default:
        return <Wifi size={40} /> // Default to WiFi icon
    }
  }

  return (
    <div id={service.id} className="service-detail">
      {/* Header section with icon and title */}
      <div className="service-header">
        <div className="service-icon">{getIcon(service.icon)}</div>
        <h2 className="service-title">{service.title}</h2>
      </div>

      {/* Service description */}
      <p className="service-description">{service.description}</p>

      {/* List of service features */}
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index} className="feature-item">
            <Check size={18} className="feature-check" /> {feature}
          </li>
        ))}
      </ul>

      {/* Pricing information */}
      <div className="service-pricing">
        <p className="price-from">
          From <span className="price">${service.priceFrom.toFixed(2)}</span>/month
        </p>
      </div>

      {/* Call-to-action button */}
      <div className="service-actions">
        <Link href="/plans" className="cta-button primary">
          View Plans
        </Link>
      </div>
    </div>
  )
}
