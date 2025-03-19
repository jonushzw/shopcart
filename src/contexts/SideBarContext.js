import React, { createContext, useState,} from 'react';
/*
Simple context to manage the sidebar state and provide functions to open and close the sidebar.
*/

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