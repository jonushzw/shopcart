import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaCreditCard, FaCcAmex, FaPaypal } from 'react-icons/fa';
import { FaGratipay } from 'react-icons/fa';
import { BsShieldCheck, BsLock } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
    const { totalAmount } = useContext(CartContext);
    const [paymentMethod, setPaymentMethod] = useState('visa');

    const handleSubmitPayment = (e) => {
        e.preventDefault();
        alert('Payment successful');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 pt-24 pb-12">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <motion.h1 
                            className="text-3xl font-bold mb-8 text-center text-gray-800"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Payment
                        </motion.h1>

                        <div className="flex justify-center mb-8">
                            <div className="w-full max-w-3xl flex items-center">
                                <div className="flex-1">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold mx-auto">1</div>
                                    <Link to ="/shop/product">
                                    <p className="text-center mt-2 text-sm font-medium text-emerald-600">Cart</p>
                                    </Link>
                                </div>
                                <div className="flex-1 border-t-2 border-emerald-600"></div>
                                <div className="flex-1">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold mx-auto">2</div>
                                    <Link to ="/shop/checkout">
                                    <p className="text-center mt-2 text-sm font-medium text-emerald-600">Checkout</p>
                                    </Link>
                                </div>
                                <div className="flex-1 border-t-2 border-emerald-600"></div>
                                <div className="flex-1">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold mx-auto">3</div>
                                    <p className="text-center mt-2 text-sm font-medium text-emerald-600">Payment</p>
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
                                    <div className="border-t border-gray-100 mt-4 pt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Subtotal</span>
                                            <span className="font-medium">${totalAmount.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between items-center mt-2 text-lg font-semibold">
                                            <span>Total</span>
                                            <span>${totalAmount.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6">
                                    <h3 className="text-lg font-semibold mb-4">Secure Payment</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center text-gray-600">
                                            <BsShieldCheck className="text-emerald-600 mr-2" />
                                            <span className="text-sm">Your payment is secure and encrypted</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <BsLock className="text-emerald-600 mr-2" />
                                            <span className="text-sm">We never store your full card details</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="lg:col-span-2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6 mb-6">
                                    <h2 className="text-xl font-bold mb-6 text-gray-800">Payment Method</h2>
                                    <div className="space-y-4">
                                        <label className={`flex items-center p-4 border ${paymentMethod === 'visa' ? 'border-emerald-500' : 'border-gray-200'} rounded-lg cursor-pointer hover:border-emerald-500 transition-colors`}>
                                            <input
                                                type="radio"
                                                id="visa"
                                                name="payment"
                                                value="visa"
                                                checked={paymentMethod === 'visa'}
                                                onChange={() => setPaymentMethod('visa')}
                                                className="mr-3 text-emerald-600 focus:ring-emerald-500"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center">
                                                    <FaCreditCard className="text-emerald-600 mr-2" />
                                                    <span className="font-medium">Visa/MasterCard</span>
                                                </div>
                                            </div>
                                        </label>

                                        <label className={`flex items-center p-4 border ${paymentMethod === 'amex' ? 'border-emerald-500' : 'border-gray-200'} rounded-lg cursor-pointer hover:border-emerald-500 transition-colors`}>
                                            <input
                                                type="radio"
                                                id="amex"
                                                name="payment"
                                                value="amex"
                                                checked={paymentMethod === 'amex'}
                                                onChange={() => setPaymentMethod('amex')}
                                                className="mr-3 text-emerald-600 focus:ring-emerald-500"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center">
                                                    <FaCcAmex className="text-emerald-600 mr-2" />
                                                    <span className="font-medium">AMEX</span>
                                                </div>
                                            </div>
                                        </label>

                                        <label className={`flex items-center p-4 border ${paymentMethod === 'paynow' ? 'border-emerald-500' : 'border-gray-200'} rounded-lg cursor-pointer hover:border-emerald-500 transition-colors`}>
                                            <input
                                                type="radio"
                                                id="paynow"
                                                name="payment"
                                                value="paynow"
                                                checked={paymentMethod === 'paynow'}
                                                onChange={() => setPaymentMethod('paynow')}
                                                className="mr-3 text-emerald-600 focus:ring-emerald-500"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center">
                                                    <FaGratipay className="text-emerald-600 mr-2" />
                                                    <span className="font-medium">PayNow</span>
                                                </div>
                                            </div>
                                        </label>

                                        <label className={`flex items-center p-4 border ${paymentMethod === 'paypal' ? 'border-emerald-500' : 'border-gray-200'} rounded-lg cursor-pointer hover:border-emerald-500 transition-colors`}>
                                            <input
                                                type="radio"
                                                id="paypal"
                                                name="payment"
                                                value="paypal"
                                                checked={paymentMethod === 'paypal'}
                                                onChange={() => setPaymentMethod('paypal')}
                                                className="mr-3 text-emerald-600 focus:ring-emerald-500"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center">
                                                    <FaPaypal className="text-emerald-600 mr-2" />
                                                    <span className="font-medium">PayPal</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6">
                                    <h2 className="text-xl font-bold mb-6 text-gray-800">Card Details</h2>
                                    <form onSubmit={handleSubmitPayment}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="1234 5678 9012 3456"
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="MM/YY"
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="123"
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="John Doe"
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="w-full bg-emerald-600 hover:bg-green-700 text-white py-3 mt-6 rounded-lg font-medium transition-colors"
                                        >
                                            Pay ${totalAmount.toFixed(2)}
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default PaymentPage;