import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBarContextProvider from '../contexts/SideBarContext';

const ShopLayout = () => {
  return (
    <SideBarContextProvider>
      <Outlet />
    </SideBarContextProvider>
  );
};

export default ShopLayout;