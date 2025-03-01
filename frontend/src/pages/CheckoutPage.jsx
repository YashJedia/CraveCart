// Location: frontend/src/pages/CheckoutPage.jsx
import { useContext, useState } from "react";
import { useCart } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(useCart);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    
    const response = await fetch("http://localhost:5000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
    clearCart();
  };

  return (
    <div className="p-6 text-center bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-red-600">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <button
          onClick={handlePayment}
          disabled={loading}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Processing..." : "Pay with Stripe"}
        </button>
      )}
    </div>
  );
};

export default CheckoutPage;
