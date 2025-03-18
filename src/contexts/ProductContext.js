import React, { useState, useEffect, createContext } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    // fetch products from the API
    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;