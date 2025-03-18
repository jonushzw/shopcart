import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
import { FiTrash2 } from 'react-icons/fi';
import { SideBarContext } from '../contexts/SideBarContext';

const Sidebar = () => {
    const { cart, totalAmount, clearCart } = useContext(CartContext);
    const { sideBar, setSideBar } = useContext(SideBarContext);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleClearCart = () => {
        clearCart();
        setShowPopup(false);
    };

    const handleNavigate = (path) => {
        setSideBar(false);
        navigate(path);
    };

    const handleCloseSidebar = () => {
        setSideBar(false);
    };

    return (
        <>
            {sideBar && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={handleCloseSidebar}></div>}
            <div className={`fixed top-0 right-0 h-full shadow-2xl bg-white z-20 px-4 lg:px-[35px] transition-transform duration-300 ${sideBar ? 'translate-x-0' : 'translate-x-full'} w-full md:w-[45vw] xl:max-w-[40vw] flex flex-col`}>
                <div className="mt-16">
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
                        <div className="text-lg font-semibold uppercase">Total: ${totalAmount ? totalAmount.toFixed(2) : '0.00'}</div>
                        <button onClick={() => setShowPopup(true)} className="flex items-center text-red-600 hover:text-red-800 transition-colors duration-300 uppercase font-semibold">
                            <FiTrash2 className="mr-2 text-xl" />
                            Clear Cart
                        </button>
                    </div>
                </div>
                <div className="py-4">
                    <button onClick={() => handleNavigate('/shop/checkout')} className="w-full bg-black text-white py-2 hover:bg-green-700 transition-colors duration-300 font-semibold">
                        Checkout
                    </button>
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
        </>
    );
}

export default Sidebar;