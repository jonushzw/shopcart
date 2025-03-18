import './globals.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DesignPage from './pages/design';
import ShopPage from './pages/shop/Home';
import styles from './styles/home.module.css';
import ProductDetails from './components/ProductDetails';
import ShopLayout from './components/ShopLayout';
import CheckoutPage from './components/CheckOutPage';
import PaymentPage from './components/PaymentPage';

function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.title}>Technical Assessment</h1>
        <p className={styles.subtitle}>Links to Both Assignments Below</p>
        <Link to="/design" className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105 mr-4">
          Assignment 1: Design
        </Link>
        <Link to="/shop/product" className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-105">
          Assignment 2: Shopping Cart
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/shop" element={<ShopLayout />} />
        <Route path="/shop/product" element={<ShopPage />} />
        <Route path="/shop/product/:id" element={<ProductDetails/>} />
        <Route path="/shop/checkout" element={<CheckoutPage />} />
        <Route path="/shop/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;