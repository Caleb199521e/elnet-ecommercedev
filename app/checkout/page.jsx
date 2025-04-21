"use client";
import { useCart } from "@/context/cart-context";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/utils/currency";
import "@/styles/checkout.css";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.priceFrom * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    // Add logic to process the order (e.g., API call)
  };

  return (
    <main className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>

      {cartItems.length > 0 ? (
        <div className="checkout-container">
          <section className="checkout-cart">
            <h2 className="section-title">Your Cart</h2>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="cart-item-image"
                  />
                  <div className="item-details">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-quantity">Quantity: {item.quantity}</p>
                    <p className="item-price">
                      Total: {formatCurrency(item.priceFrom * item.quantity)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="cart-total">
              Total Price: <span>{formatCurrency(totalPrice)}</span>
            </p>
          </section>

          <section className="checkout-form">
            <h2 className="section-title">Shipping Details</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <button
                type="button"
                className="place-order-button"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </form>
          </section>
        </div>
      ) : (
        <p className="empty-cart-message">
          Your cart is empty. <Link href="/products">Go back to shop</Link>.
        </p>
      )}
    </main>
  );
}