import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, amount: item.amount + quantity } : item
                );
            } else {
                return [...prevCart, { ...product, amount: quantity }];
            }
        });
    };

    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === id ? { ...item, amount: item.amount + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === id && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalAmount = cart.reduce((total, item) => total + item.price * item.amount, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;