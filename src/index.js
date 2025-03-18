import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import App from './App';
import ProductContextProvider from './contexts/ProductContext';
import SideBarContextProvider from './contexts/SideBarContext';
import CartContextProvider from './contexts/CartContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SideBarContextProvider>
    <CartContextProvider>
      <ProductContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductContextProvider>
      </CartContextProvider>
    </SideBarContextProvider>,
  document.getElementById('root')
);