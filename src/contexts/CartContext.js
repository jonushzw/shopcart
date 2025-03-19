import React, { createContext, useState, useEffect } from 'react';
/*
Cart Context used to manage the cart state and provide functions to add, remove, and update items in the cart.
Simple context to add, remove, and update items in the cart.
*/

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    // Load cart from localStorage
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('shopping-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('shopping-cart', JSON.stringify(cart));
    }, [cart]);

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
        localStorage.removeItem('shopping-cart');
    };

    const totalAmount = cart.reduce((total, item) => total + item.price * item.amount, 0);
    
    const itemAmount = cart.reduce((total, item) => total + item.amount, 0);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            increaseQuantity, 
            decreaseQuantity, 
            removeFromCart, 
            clearCart, 
            totalAmount,
            itemAmount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;