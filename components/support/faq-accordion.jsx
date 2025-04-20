"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQAccordion({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
          <button className="faq-question" onClick={() => toggleFAQ(index)} aria-expanded={activeIndex === index}>
            {faq.question}
            <span className="faq-icon">
              {activeIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>

          <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
