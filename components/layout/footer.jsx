import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import "@/styles/footer.css"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">EL Net</h2>
          <p className="footer-tagline">Fast, Reliable, Affordable Internet for Everyone</p>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link href="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="footer-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/plans" className="footer-link">
                Plans & Pricing
              </Link>
            </li>
            <li>
              <Link href="/support" className="footer-link">
                Support
              </Link>
            </li>
            <li>
              <Link href="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/portal" className="footer-link">
                Customer Portal
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li>
              <Link href="/services#fiber" className="footer-link">
                Fiber-Optic Internet
              </Link>
            </li>
            <li>
              <Link href="/services#wireless" className="footer-link">
                Wireless Broadband
              </Link>
            </li>
            <li>
              <Link href="/services#voip" className="footer-link">
                VoIP Services
              </Link>
            </li>
            <li>
              <Link href="/services#smart-home" className="footer-link">
                Smart Home Integration
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <address className="contact-info">
            <p>1234 Tech Avenue</p>
            <p>Silicon Valley, CA 94000</p>
            <p>
              Phone:{" "}
              <a href="tel:1-800-ELNET" className="contact-link">
                1-800-ELNET
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:support@elnet.com" className="contact-link">
                support@elnet.com
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">© 2025 EL Net. All rights reserved.</p>
          <div className="legal-links">
            <Link href="/terms" className="legal-link">
              Terms of Service
            </Link>
            <Link href="/privacy" className="legal-link">
              Privacy Policy
            </Link>
          </div>
          <div className="payment-methods">
            <span className="payment-icon visa" aria-label="Visa"></span>
            <span className="payment-icon mastercard" aria-label="Mastercard"></span>
            <span className="payment-icon amex" aria-label="American Express"></span>
            <span className="payment-icon paypal" aria-label="PayPal"></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
