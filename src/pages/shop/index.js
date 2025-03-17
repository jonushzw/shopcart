import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'; // Import the Navbar component
import styles from '../../styles/shop.module.css';

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
        <Navbar /> {/* Add the Navbar component */}
      <div className={styles.shop}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.productList}>
          {products.map(product => (
            <div key={product.id} className={styles.productCard}>
              <Link to={`/shop/product/${product.id}`}>
                <img src={product.image} alt={product.title} className={styles.productImage} />
                <h2 className={styles.productTitle}>{product.title}</h2>
                <p className={styles.productPrice}>${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;