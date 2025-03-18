import React from 'react';
import Header from './Header';

const ShopLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default ShopLayout;