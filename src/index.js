import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import App from './App';
import ProductContextProvider from './contexts/ProductContext';
import SideBarContextProvider from './contexts/SideBarContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SideBarContextProvider>
    <ProductContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductContextProvider>
    </SideBarContextProvider>,
  document.getElementById('root')
);