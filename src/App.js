import './globals.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DesignPage from './pages/design';
import ShopPage from './pages/shop';
import ProductDetail from './pages/shop/ProductDetail';
import CartPage from './pages/shop/CartPage';
import styles from './styles/home.module.css';
import { useState } from 'react';

function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.title}>Technical Assessment</h1>
        <p className={styles.subtitle}>Links to Both Assignments Below</p>
        <Link to="/design" className={styles.ctaButton}>Assignment 1: Design</Link>
        <Link to="/shop" className={styles.ctaButton}>Assignment 2: Shopping Cart</Link>
      </header>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/shop/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;