import { Send } from "lucide-react"

export default function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" id="name" className="form-input" required />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" id="email" className="form-input" required />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Phone (optional)
        </label>
        <input type="tel" id="phone" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <select id="subject" className="form-select" required>
          <option value="">Select a subject</option>
          <option value="technical">Technical Support</option>
          <option value="billing">Billing Question</option>
          <option value="sales">Sales Inquiry</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea id="message" className="form-textarea" rows={5} required></textarea>
      </div>

      <button type="submit" className="form-submit">
        Send Message <Send size={16} className="ml-1" />
      </button>
    </form>
  )
}
