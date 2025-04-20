import PageHeader from "@/components/shared/page-header"
import FAQAccordion from "@/components/support/faq-accordion"
import ContactForm from "@/components/support/contact-form"
import ContactInfo from "@/components/support/contact-info"
import "@/styles/support.css"

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I check my internet speed?",
      answer:
        "You can check your internet speed by visiting our speed test tool at speedtest.elnet.com or by using third-party services like Speedtest.net or Fast.com.",
    },
    {
      question: "What should I do if my internet is slow?",
      answer:
        "First, try restarting your router. If the issue persists, check if there are too many devices connected to your network. You can also try connecting your device directly to the modem with an Ethernet cable to see if it's a Wi-Fi issue. If problems continue, please contact our support team.",
    },
    {
      question: "How do I pay my bill?",
      answer:
        "You can pay your bill through our customer portal, via our mobile app, by calling our payment line at 1-800-ELNET, or by setting up automatic payments from your bank account or credit card.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Standard installation typically takes 2-3 hours. For fiber installations in new service areas, it may take 3-4 hours. Our technician will provide you with a more accurate timeframe when they arrive.",
    },
    {
      question: "Can I upgrade my plan?",
      answer:
        "Yes! You can upgrade your plan at any time through your customer portal or by contacting our customer service. Upgrades are typically processed within 24 hours.",
    },
    {
      question: "Do you offer services in my area?",
      answer:
        "We're rapidly expanding our coverage area. You can check service availability by entering your address on our home page or by contacting our sales team.",
    },
  ]

  return (
    <main className="support-page">
      <PageHeader title="Customer Support" subtitle="We're here to help you with any questions or issues" />

      <section className="support-container">
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>

        <div className="contact-section">
          <div className="contact-info-container">
            <h2>Contact Us</h2>
            <ContactInfo />
          </div>

          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
