import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ALBUMS } from "./data/albums";
import CatalogPage from "./pages/CatalogPage";
import AlbumDetailPage from "./pages/AlbumDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  function addToCart(album) {
    setCart((oldCart) => {
      const found = oldCart.find((item) => item.id === album.id);
      if (found) {
        return oldCart.map((item) => item.id === album.id
          ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
          : item);
      }
      if (album.stock < 1) return oldCart;
      return [...oldCart, { ...album, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function increase(id) {
    setCart((oldCart) => oldCart.map((item) => item.id === id
      ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
      : item));
  }

  function decrease(id) {
    setCart((oldCart) => oldCart.map((item) => item.id === id
      ? { ...item, quantity: item.quantity - 1 }
      : item).filter((item) => item.quantity > 0));
  }

  function remove(id) {
    setCart((oldCart) => oldCart.filter((item) => item.id !== id));
  }

  return (
    <>
      <header>
        <Link to="/">VinylVault</Link>
        <button onClick={() => setCartOpen(true)}>Cart ({cartCount})</button>
      </header>
      <Routes>
        <Route path="/" element={<CatalogPage albums={ALBUMS} addToCart={addToCart} />} />
        <Route path="/album/:albumId" element={<AlbumDetailPage albums={ALBUMS} addToCart={addToCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} clearCart={() => setCart([])} />} />
        <Route path="*" element={<main><h2>Page not found</h2><Link to="/">Back to store</Link></main>} />
      </Routes>
      <CartDrawer open={cartOpen} cart={cart} close={() => setCartOpen(false)}
        increase={increase} decrease={decrease} remove={remove} />
    </>
  );
}

export default App;
