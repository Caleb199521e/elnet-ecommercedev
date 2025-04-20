'use client';
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";
import "@/styles/header.css";
import { useState } from "react";

export default function Header() {
  const [cartCount, setCartCount] = useState(0); // State to track cart items

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-container">
          <Link href="/" className="logo-link">
            <h1 className="logo">EL Net</h1>
          </Link>
        </div>

        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/plans" className="nav-link">
                Plans & Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/support" className="nav-link">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          

          <Link href="/portal" className="portal-link">
            Customer Portal
          </Link>
          <Link href="/plans" className="cta-button">
            Get Connected
          </Link>
          <button className="mobile-menu-toggle" aria-label="Toggle menu">
            <Menu size={24} />
          </button>

          {/* Cart Icon with Counter */}
          <div className="cart-container">
            <Link href="/cart" className="cart-link">
              <ShoppingCart size={24} />
              {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
