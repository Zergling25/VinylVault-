import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage({ cart, clearCart }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function submitOrder(event) {
    event.preventDefault();
    if (!name.trim() || !address.trim() || !city.trim() || !postalCode.trim() || !cardDetails.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    setError("");
    clearCart();
    setConfirmed(true);
  }

  if (confirmed) {
    return <main><h1>Order confirmed!</h1><p>Thank you, {name}.</p><button onClick={() => navigate("/")}>Back to store</button></main>;
  }

  return (
    <main>
      <h1>Checkout</h1>
      <h2>Your order</h2>
      {cart.map((item) => <p key={item.id}>{item.title} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>)}
      <h3>Subtotal: ${total.toFixed(2)}</h3>
      <h2>Shipping and payment</h2>
      <form onSubmit={submitOrder}>
        <label>Full Name<input value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Address<input value={address} onChange={(e) => setAddress(e.target.value)} /></label>
        <label>City<input value={city} onChange={(e) => setCity(e.target.value)} /></label>
        <label>Postal Code<input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} /></label>
        <label>Card Details<input value={cardDetails} onChange={(e) => setCardDetails(e.target.value)} /></label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Place order</button>
      </form>
    </main>
  );
}

export default CheckoutPage;
