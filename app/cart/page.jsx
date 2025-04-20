"use client";
import { useCart } from "@/context/cart-context";
import Link from "next/link";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { formatCurrency } from "@/utils/currency"; // Import the utility function
import "@/styles/cart.css";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.priceFrom * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className="cart-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="cart-item-image"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{formatCurrency(item.priceFrom)}</td>
                  <td>{item.quantity}</td>
                  <td>{formatCurrency(item.priceFrom * item.quantity)}</td>
                  <td>
                    <button
                      className="remove-button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.title}`}
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <p className="total-price">
              Total: <span>{formatCurrency(totalPrice)}</span>
            </p>
            <Link href="/checkout" className="checkout-button">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
    </main>
  );
}