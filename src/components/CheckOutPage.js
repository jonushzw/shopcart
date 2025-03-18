import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const CheckoutPage = () => {
    const { cart, totalAmount } = useContext(CartContext);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <section className='mt-20 pt-20 flex-1'>
                    <div className='container mx-auto py-20'>
                        <h2 className='text-4xl font-bold mb-10 text-center'>Checkout</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div>
                                <h3 className='text-2xl font-bold mb-5'>Order Summary</h3>
                                <div className='bg-white p-6 rounded-lg shadow-lg mb-10'>
                                    {cart.map(item => (
                                        <CartItem item={item} key={item.id} />
                                    ))}
                                    <div className='flex justify-between items-center mt-6'>
                                        <span className='text-xl font-semibold'>Total:</span>
                                        <span className='text-xl font-semibold'>${totalAmount ? totalAmount.toFixed(2) : '0.00'}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold mb-5'>Shipping Details</h3>
                                <div className='bg-white p-6 rounded-lg shadow-lg mb-10'>
                                    <form className='space-y-4'>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Full Name</label>
                                            <input type='text' className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Email Address</label>
                                            <input type='email' className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Address</label>
                                            <input type='text' className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>City</label>
                                            <input type='text' className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Postal Code</label>
                                            <input type='text' className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Country</label>
                                            <input type='text' className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <Link to="/shop/payment" className='block w-full'>
                                            <button type='submit' className='w-full bg-black text-white py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-transform duration-500 transform hover:scale-105 font-semibold'>
                                                Proceed to Payment
                                            </button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default CheckoutPage;