import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import App from './App';
import ProductContextProvider from './contexts/ProductContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductContextProvider>
    <React.StrictMode>
     <App />
    </React.StrictMode>
  </ProductContextProvider>,
  document.getElementById('root')
);