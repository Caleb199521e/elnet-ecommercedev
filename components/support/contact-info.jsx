import { Phone, Mail, MessageSquare, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-method">
        <div className="contact-icon">
          <Phone size={24} />
        </div>
        <div className="contact-details">
          <h3 className="contact-title">Phone Support</h3>
          <p className="contact-value">1-800-ELNET (1-800-356-38)</p>
          <p className="contact-hours">Available 24/7</p>
        </div>
      </div>

      <div className="contact-method">
        <div className="contact-icon">
          <Mail size={24} />
        </div>
        <div className="contact-details">
          <h3 className="contact-title">Email Support</h3>
          <p className="contact-value">support@elnet.com</p>
          <p className="contact-hours">Response within 24 hours</p>
        </div>
      </div>

      <div className="contact-method">
        <div className="contact-icon">
          <MessageSquare size={24} />
        </div>
        <div className="contact-details">
          <h3 className="contact-title">Live Chat</h3>
          <p className="contact-value">Available on our website</p>
          <p className="contact-hours">8am - 10pm, 7 days a week</p>
        </div>
      </div>

      <div className="contact-method">
        <div className="contact-icon">
          <MapPin size={24} />
        </div>
        <div className="contact-details">
          <h3 className="contact-title">Visit Us</h3>
          <p className="contact-value">1234 Tech Avenue, Silicon Valley, CA 94000</p>
          <p className="contact-hours">Mon-Fri: 9am-6pm, Sat: 10am-4pm</p>
        </div>
      </div>
    </div>
  )
}
