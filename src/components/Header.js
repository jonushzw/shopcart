import React, { useContext } from "react";
import { SideBarContext } from "../contexts/SideBarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
    const { sideBar, setSideBar } = useContext(SideBarContext);
    return <div>
        <div>Header</div>
        <div onClick={() => setSideBar(!sideBar)}
            className="cursor-pointer fixed bottom-4 right-4 bg-gray-50 p-4 rounded-full shadow-2xl z-20">
            <BsBag className="text-2xl" />
        </div>
    </div>
}

export default Header;