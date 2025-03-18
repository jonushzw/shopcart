import React, { useContext, useState } from "react";
import { SideBarContext } from "../contexts/SideBarContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Sidebar = () => { 
    const { sideBar, handleClose } = useContext(SideBarContext);
    const { cart, clearCart } = useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false);

    const totalAmount = cart.reduce((total, item) => total + item.price * item.amount, 0);

    const handleClearCart = () => {
        clearCart();
        setShowPopup(false);
    };

    return (
        <div className={`fixed top-0 right-0 h-full shadow-2xl bg-white z-20 px-4 lg:px-[35px] transition-transform duration-300 ${sideBar ? 'translate-x-0' : 'translate-x-full'} w-full md:w-[35vw] xl:max-w-[30vw] flex flex-col`}>
            <button onClick={handleClose} className="absolute top-4 right-4">
                <IoMdArrowForward className="text-4xl" />
            </button>
            <div>
                <div className="flex items-center justify-between py-6 border-b border-gray-200">
                    <div className="text-lg font-semibold uppercase">Shopping Bag ({cart.length})</div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                {cart.map(item => (
                    <CartItem item={item} key={item.id} />
                ))}
            </div>
            <div className="border-t border-gray-200 py-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold uppercase">Total: ${totalAmount.toFixed(2)}</div>
                    <button onClick={() => setShowPopup(true)} className="flex items-center text-red-600 hover:text-red-800 transition-colors duration-300 uppercase font-semibold">
                        <FiTrash2 className="mr-2 text-xl" />
                        Clear Cart
                    </button>
                </div>
            </div>
            <div className="mt-auto">
                <div className="border-t border-gray-200 py-4">
                    <button onClick={handleClose} className="w-full bg-gray-200 text-gray-800 py-3 hover:bg-gray-400 transition-colors duration-300 font-semibold mb-2">
                        Return to Products
                    </button>
                    <Link to="/checkout" className="w-full block">
                        <button className="w-full bg-black text-white py-3 hover:bg-green-700 transition-colors duration-300 font-semibold">
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Are you sure you want to clear the cart?</h2>
                        <div className="flex justify-end space-x-4">
                            <button onClick={() => setShowPopup(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors duration-300 uppercase font-bold">Cancel</button>
                            <button onClick={handleClearCart} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300 uppercase font-bold">Clear Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;