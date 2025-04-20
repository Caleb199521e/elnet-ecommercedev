import { User, CreditCard, BarChart, HeadphonesIcon, ArrowUp, Smartphone } from "lucide-react"

export default function PortalFeatures() {
  const features = [
    {
      title: "Manage Your Account",
      description: "Update your personal information, manage payment methods, and view your service details.",
      icon: <User size={24} />,
    },
    {
      title: "Pay Your Bills",
      description: "View your billing history, download invoices, and make payments securely online.",
      icon: <CreditCard size={24} />,
    },
    {
      title: "Monitor Usage",
      description: "Track your data usage, view connection statistics, and optimize your internet experience.",
      icon: <BarChart size={24} />,
    },
    {
      title: "Get Support",
      description: "Submit support tickets, track their status, and access our knowledge base for self-help.",
      icon: <HeadphonesIcon size={24} />,
    },
    {
      title: "Upgrade Your Plan",
      description: "Explore available upgrades, add services, or modify your current plan to suit your needs.",
      icon: <ArrowUp size={24} />,
    },
    {
      title: "Manage Devices",
      description: "View connected devices, set up parental controls, and manage your home network.",
      icon: <Smartphone size={24} />,
    },
  ]

  return (
    <div className="portal-features">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
