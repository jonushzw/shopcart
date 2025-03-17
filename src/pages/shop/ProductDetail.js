import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../styles/shop.module.css';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.productDetail}>
      <div className={styles.productImageContainer}>
        <img src={product.image} alt={product.title} className={styles.productImage} />
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <button onClick={() => addToCart(product)} className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;