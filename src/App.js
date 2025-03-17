import './globals.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DesignPage from './pages/design';
import ShopPage from './pages/shop';
import styles from './styles/home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.title}>Technical Assessment</h1>
        <div>
        <p className={styles.subtitle}>Links to Both Assignments Below</p>
        <Link to="/design" className={styles.ctaButton}>Assignment 1: Design</Link>
        <Link to="/shop" className={styles.ctaButton}>Assignment 2: Shopping Cart</Link>
        </div>
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
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;