import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SideBarContext } from "../contexts/SideBarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
    const { sideBar, setSideBar } = useContext(SideBarContext);
    const { cart } = useContext(CartContext);

    return (
        <div className="fixed w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
            <div className="flex items-center">
                <Link to="/" className="text-xl font-bold mr-4">ShopCart</Link>
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105">
                    Back to Root
                </Link>
            </div>
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