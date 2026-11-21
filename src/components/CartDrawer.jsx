import { Link } from "react-router-dom";

function CartDrawer({ open, cart, close, increase, decrease, remove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!open) return null;

  return (
    <div className="cart-background">
      <section className="cart">
        <button onClick={close}>Close</button>
        <h2>Your Cart</h2>
        {cart.length === 0 && <p>Your cart is empty.</p>}
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <p>{item.title}</p>
            <p>${item.price.toFixed(2)} each</p>
            <button onClick={() => decrease(item.id)}>-</button>
            {item.quantity}
            <button onClick={() => increase(item.id)}>+</button>
            <button onClick={() => remove(item.id)}>Remove</button>
          </div>
        ))}
        <h3>Subtotal: ${total.toFixed(2)}</h3>
        <Link to="/checkout" onClick={close}>Go to checkout</Link>
      </section>
    </div>
  );
}

export default CartDrawer;
