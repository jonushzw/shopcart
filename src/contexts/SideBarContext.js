import React, { createContext, useState, useEffect } from 'react';

export const SideBarContext = createContext();

const SideBarContextProvider = ({ children }) => {

    const [sideBar, setSideBar] = useState(false);
    const handleClose = () => setSideBar(false);

    return <SideBarContext.Provider 
            value={{ sideBar, setSideBar, handleClose }}>
            {children}
        </SideBarContext.Provider>;
};

export default SideBarContextProvider;