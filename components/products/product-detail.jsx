'use client';
import Image from "next/image"
import { Check } from "lucide-react"

export default function ProductDetail({ product }) {
  const handleAddToCart = () => {
    alert(`Added ${product.title} to cart!`) // Replace with actual cart logic
  }
  return (
    <div id={product.id} className="product-card">
      {/* Product Image */}
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.title}
          width={300} // Set appropriate width
          height={200} // Set appropriate height
          layout="responsive" // Optional for responsive images
        />
      </div>

      {/* Product Details */}
      <div className="product-content">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <ul className="product-features">
          {product.features.map((feature, index) => (
            <li key={index} className="feature-item">
              <Check size={18} className="feature-check" /> {feature}
            </li>
          ))}
        </ul>
        <div className="product-pricing">
          <p className="price-from">
            From <span className="price">${product.priceFrom.toFixed(2)}</span>
          </p>
        </div>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        
      </div>
    </div>
  )
}