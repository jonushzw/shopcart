import React, { useContext } from "react";
import { SideBarContext } from "../contexts/SideBarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
    const { sideBar, setSideBar } = useContext(SideBarContext);
    const { cart } = useContext(CartContext);

    return (
        <div className="fixed w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
            <h1 className="text-xl font-bold">ShopCart</h1>
            <div onClick={() => setSideBar(!sideBar)}
                className="relative cursor-pointer bg-gray-50 p-2 rounded-full shadow-2xl z-20 flex items-center hover:bg-gray-200 transition-colors duration-300">
                <BsBag className="text-2xl text-gray-700 hover:text-gray-500 transition-colors duration-300" />
                {cart.length > 0 && (
                    <span className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-red-600 text-white rounded-full px-2 py-1 text-xs font-bold">
                        {cart.length}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Header;