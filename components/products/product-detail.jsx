'use client'; // Indicates that this component is a client-side component in Next.js

import Image from "next/image"; // Import Next.js optimized Image component for rendering images
import { toast } from "react-hot-toast"; // Import toast notifications for user feedback
import { useCart } from "@/context/cart-context"; // Import the custom Cart context for managing cart state
import { formatCurrency } from "@/utils/currency"; // Import utility function to format prices as currency

// Define the ProductDetail component, which accepts a `product` prop
export default function ProductDetail({ product }) {
  const { addToCart } = useCart(); // Destructure the `addToCart` function from the Cart context

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart using the context function
    toast.success(`${product.title} added to cart!`); // Show a success toast notification
  };

  return (
    <div id={product.id} className="product-card"> {/* Wrapper for the product card with a unique ID */}
      
      {/* Product Image */}
      <div className="product-image"> {/* Container for the product image */}
        <Image
          src={product.image} // Source of the product image
          alt={product.title} // Alt text for accessibility
          width={300} // Width of the image
          height={200} // Height of the image
          layout="responsive" // Responsive layout for the image
        />
      </div>

      {/* Product Details */}
      <div className="product-content"> {/* Container for product details */}
        <h2 className="product-title">{product.title}</h2> {/* Product title */}
        <p className="product-description">{product.description}</p> {/* Product description */}
        
        {/* List of product features */}
        <ul className="product-features">
          {product.features.map((feature, index) => ( // Map through the features array
            <li key={index} className="feature-item"> {/* Render each feature as a list item */}
              {feature}
            </li>
          ))}
        </ul>

        {/* Product Pricing */}
        <div className="product-pricing"> {/* Container for product pricing */}
          <p className="price-from">
            From <span className="price">{formatCurrency(product.priceFrom)}</span> {/* Display formatted price */}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button className="add-to-cart-button" onClick={handleAddToCart}> {/* Button to add product to cart */}
          Add to Cart
        </button>
      </div>
    </div>
  );
}