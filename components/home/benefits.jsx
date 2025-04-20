import { Zap, HeadphonesIcon, CreditCard, Settings } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      title: "Lightning-Fast Speeds",
      description:
        "Experience download speeds up to 10 Gbps and upload speeds up to 2 Gbps with our fiber-optic network.",
      icon: <Zap size={32} />,
    },
    {
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to help you with any issues or questions.",
      icon: <HeadphonesIcon size={32} />,
    },
    {
      title: "Easy Online Billing",
      description: "Manage your account, view usage, and pay bills online through our secure customer portal.",
      icon: <CreditCard size={32} />,
    },
    {
      title: "Digital Tools & Apps",
      description: "Access a suite of tools to optimize your network, monitor usage, and control smart home devices.",
      icon: <Settings size={32} />,
    },
  ]

  return (
    <section className="benefits-section">
      <div className="section-header">
        <h2 className="section-title">Why Choose EL Net</h2>
        <p className="section-subtitle">We're committed to providing the best internet experience possible</p>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
