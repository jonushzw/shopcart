import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
import { FiTrash2, FiX } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import { SideBarContext } from '../contexts/SideBarContext';
import { motion, AnimatePresence } from 'framer-motion';

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
            <AnimatePresence>
                {sideBar && (
                    <motion.div 
                        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-10" 
                        onClick={handleCloseSidebar}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>

            <motion.div 
                className={`fixed top-0 right-0 h-full shadow-xl bg-white z-30 px-6 py-4 transition-transform duration-300 ${sideBar ? 'translate-x-0' : 'translate-x-full'} w-full md:w-[450px] flex flex-col`}
                initial={{ x: '100%' }}
                animate={{ x: sideBar ? 0 : '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
            >
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <FaShoppingBag className="text-xl text-emerald-600" />
                        <h2 className="text-xl font-semibold">Your Cart <span className="ml-1 text-sm font-medium px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">({cart.length})</span></h2>
                    </div>
                    <button 
                        onClick={handleCloseSidebar}
                        className="text-gray-500 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
                    >
                        <FiX className="text-2xl" />
                    </button>
                </div>

                {cart.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                        <FaShoppingBag className="text-5xl text-gray-300 mb-4" />
                        <h3 className="text-xl font-medium text-gray-700 mb-2">Your cart is empty</h3>
                        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                        <button 
                            onClick={() => handleNavigate('/shop/product')} 
                            className="px-4 md:px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                        >
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto py-4 space-y-4">
                            {cart.map(item => (
                                <CartItem item={item} key={item.id} />
                            ))}
                        </div>

                        <div className="border-t border-gray-100 pt-4">
                            <div className="flex justify-between items-center mb-4 py-2">
                                <div className="font-medium text-gray-600">Subtotal</div>
                                <div className="text-lg font-semibold">${totalAmount ? totalAmount.toFixed(2) : '0.00'}</div>
                            </div>
                            <button 
                                onClick={() => setShowPopup(true)} 
                                className="w-full py-2 mb-2 flex items-center justify-center font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                <FiTrash2 className="mr-2" />
                                Clear Cart
                            </button>
                            <button 
                                onClick={() => handleNavigate('/shop/checkout')} 
                                className="w-full bg-black text-white py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-medium flex items-center justify-center"
                            >
                                Checkout
                            </button>
                        </div>
                    </>
                )}

                <AnimatePresence>
                    {showPopup && (
                        <motion.div 
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div 
                                className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full mx-4"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                            >
                                <h2 className="text-xl font-semibold mb-4">Clear your cart?</h2>
                                <p className="text-gray-600 mb-6">This will remove all items from your cart.</p>
                                <div className="flex justify-end space-x-3">
                                    <button 
                                        onClick={() => setShowPopup(false)} 
                                        className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        onClick={handleClearCart} 
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                                    >
                                        Clear Cart
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}

export default Sidebar;