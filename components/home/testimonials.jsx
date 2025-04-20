import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Switching to EL Net was the best decision we made. The speeds are incredible, and we've never experienced any downtime.",
      author: "Sarah Johnson",
      role: "Small Business Owner",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As someone who works from home, reliable internet is essential. EL Net delivers consistent performance even during peak hours.",
      author: "Michael Chen",
      role: "Software Developer",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The customer service is outstanding. When I had questions about my smart home setup, they walked me through everything step by step.",
      author: "Emily Rodriguez",
      role: "Homeowner",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Don't just take our word for it - hear from our satisfied customers</p>
      </div>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <Quote size={32} className="testimonial-quote-icon" />
              <blockquote className="testimonial-quote">"{testimonial.quote}"</blockquote>
              <div className="testimonial-author">
                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} className="author-image" />
                <div className="author-info">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
