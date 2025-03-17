import React from 'react';
import styles from '../../styles/shop.module.css';

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.title}>Shopping Cart</h1>
      <div className={styles.cartList}>
        {cart.map(product => (
          <div key={product.id} className={styles.cartItem}>
            <img src={product.image} alt={product.title} className={styles.cartImage} />
            <div className={styles.cartDetails}>
              <h2 className={styles.cartTitle}>{product.title}</h2>
              <p className={styles.cartPrice}>${product.price}</p>
              <input
                type="number"
                value={product.quantity}
                onChange={(e) => updateQuantity(product.id, e.target.value)}
                className={styles.cartQuantity}
                min="1"
              />
              <button onClick={() => removeFromCart(product.id)} className={styles.removeButton}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <h2 className={styles.totalAmount}>Total: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;