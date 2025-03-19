import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { FaTruck, FaShippingFast, FaShieldAlt, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CheckoutPage = () => {
    const { cart, totalAmount } = useContext(CartContext);
    const [shippingOption, setShippingOption] = useState('standard');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProceedToPayment = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items to your cart before proceeding to payment.');
            return;
        }
        for (const key in formData) {
            if (formData[key] === '') {
                alert(`Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}.`);
                return;
            }
        }
        // Proceed to payment
        navigate('/shop/payment');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 pt-24 pb-12">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <motion.h1 
                            className="text-3xl font-bold mb-8 text-center text-gray-800"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Checkout
                        </motion.h1>

                        <div className="flex justify-center mb-8">
                            <div className="w-full max-w-3xl flex items-center">
                                <div className="flex-1">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold mx-auto">1</div>
                                    <p className="text-center mt-2 text-sm font-medium text-emerald-600">Cart</p>
                                </div>
                                <div className="flex-1 border-t-2 border-emerald-600"></div>
                                <div className="flex-1">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold mx-auto">2</div>
                                    <p className="text-center mt-2 text-sm font-medium text-emerald-600">Shipping</p>
                                </div>
                                <div className="flex-1 border-t-2 border-gray-300"></div>
                                <div className="flex-1">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold mx-auto">3</div>
                                    <p className="text-center mt-2 text-sm font-medium text-gray-600">Payment</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <motion.div 
                                className="lg:col-span-1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6 mb-6">
                                    <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
                                    <div className="divide-y divide-gray-100">
                                        {cart.map(item => (
                                            <div key={item.id} className="py-4 flex gap-4">
                                                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                                                    <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain p-1" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-sm font-medium text-gray-900 truncate">{item.title}</h3>
                                                    <p className="text-sm text-gray-500">Qty: {item.amount}</p>
                                                </div>
                                                <div className="text-sm font-semibold whitespace-nowrap">${(item.price * item.amount).toFixed(2)}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-gray-100 mt-4 pt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Subtotal</span>
                                            <span className="font-medium">${totalAmount.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-gray-600">Shipping</span>
                                            <span className="font-medium">{shippingOption === 'standard' ? '$0.00' : '$15.00'}</span>
                                        </div>
                                        <div className="flex justify-between items-center mt-2 text-lg font-semibold">
                                            <span>Total</span>
                                            <span>${(totalAmount + (shippingOption === 'standard' ? 0 : 15)).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6">
                                    <div className="flex items-center mb-4">
                                        <FaShieldAlt className="text-emerald-600 mr-2" />
                                        <span className="text-sm text-gray-700">Secure Checkout</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <FaLock className="text-emerald-600 mr-2" />
                                        <span className="text-sm text-gray-700">SSL Encrypted Payment</span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="lg:col-span-2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6">
                                    <h2 className="text-xl font-bold mb-6 text-gray-800">Shipping Details</h2>
                                    <form onSubmit={handleProceedToPayment}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                                <input 
                                                    type="text" 
                                                    name="fullName" 
                                                    value={formData.fullName} 
                                                    onChange={handleInputChange}
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                                <input 
                                                    type="email" 
                                                    name="email" 
                                                    value={formData.email} 
                                                    onChange={handleInputChange}
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                                <input 
                                                    type="text" 
                                                    name="address" 
                                                    value={formData.address} 
                                                    onChange={handleInputChange}
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                                <input 
                                                    type="text" 
                                                    name="city" 
                                                    value={formData.city} 
                                                    onChange={handleInputChange}
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                                <input 
                                                    type="text" 
                                                    name="postalCode" 
                                                    value={formData.postalCode} 
                                                    onChange={handleInputChange}
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                                <input 
                                                    type="text" 
                                                    name="country" 
                                                    value={formData.country} 
                                                    onChange={handleInputChange}
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-800">Shipping Options</h3>
                                        <div className="space-y-4 mb-8">
                                            <label className={`flex items-center p-4 border ${shippingOption === 'standard' ? 'border-emerald-500' : 'border-gray-200'} rounded-lg cursor-pointer hover:border-emerald-500 transition-colors`}>
                                                <input 
                                                    type="radio" 
                                                    name="shipping" 
                                                    value="standard" 
                                                    checked={shippingOption === 'standard'}
                                                    onChange={() => setShippingOption('standard')}
                                                    className="mr-3 text-emerald-600 focus:ring-emerald-500"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center">
                                                        <FaTruck className="text-emerald-600 mr-2" />
                                                        <span className="font-medium">Standard Delivery</span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mt-1">Free - Estimated delivery: 5-7 business days</p>
                                                </div>
                                                <span className="font-semibold">$0.00</span>
                                            </label>

                                            <label className={`flex items-center p-4 border ${shippingOption === 'next-day' ? 'border-emerald-500' : 'border-gray-200'} rounded-lg cursor-pointer hover:border-emerald-500 transition-colors`}>
                                                <input 
                                                    type="radio" 
                                                    name="shipping" 
                                                    value="next-day" 
                                                    checked={shippingOption === 'next-day'}
                                                    onChange={() => setShippingOption('next-day')}
                                                    className="mr-3 text-emerald-600 focus:ring-emerald-500"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center">
                                                        <FaShippingFast className="text-emerald-600 mr-2" />
                                                        <span className="font-medium">Express Delivery</span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mt-1">Estimated delivery: 1-2 business days</p>
                                                </div>
                                                <span className="font-semibold">$15.00</span>
                                            </label>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <button 
                                                type="submit" 
                                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors"
                                                disabled={cart.length === 0}
                                            >
                                                Proceed to Payment
                                            </button>
                                            <Link 
                                                to="/shop/product" 
                                                className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors text-center"
                                            >
                                                Continue Shopping
                                            </Link>
                                        </div>
                                        {cart.length === 0 && (
                                            <p className="text-center text-red-500 mt-2 text-sm">Your cart is empty</p>
                                        )}
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CheckoutPage;