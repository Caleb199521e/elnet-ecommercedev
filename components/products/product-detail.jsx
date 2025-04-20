'use client';
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useCart } from "@/context/cart-context";
import { formatCurrency } from "@/utils/currency"; // Import the utility function

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div id={product.id} className="product-card">
      {/* Product Image */}
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          layout="responsive"
        />
      </div>

      {/* Product Details */}
      <div className="product-content">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <ul className="product-features">
          {product.features.map((feature, index) => (
            <li key={index} className="feature-item">
              {feature}
            </li>
          ))}
        </ul>
        <div className="product-pricing">
          <p className="price-from">
            From <span className="price">{formatCurrency(product.priceFrom)}</span>
          </p>
        </div>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}