import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const PaymentPage = () => {
    const { totalAmount } = useContext(CartContext);
    const [paymentMethod, setPaymentMethod] = useState('visa');

    const handleSubmitPayment = (e) => {
        e.preventDefault();
        alert('Payment successful');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <section className='mt-20 pt-20 flex-1'>
                    <div className='container mx-auto py-20'>
                        <h2 className='text-4xl font-bold mb-10 text-center'>Payment</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div>
                                <h3 className='text-2xl font-bold mb-5'>Order Summary</h3>
                                <div className='bg-white p-6 rounded-lg shadow-lg mb-10'>
                                    <div className='flex justify-between items-center mt-6'>
                                        <span className='text-xl font-semibold'>Total:</span>
                                        <span className='text-xl font-semibold'>${totalAmount ? totalAmount.toFixed(2) : '0.00'}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold mb-5'>Payment Methods</h3>
                                <div className='bg-white p-6 rounded-lg shadow-lg mb-10'>
                                    <div className='space-y-4'>
                                        <div className='flex items-center'>
                                            <input
                                                type='radio'
                                                id='visa'
                                                name='payment'
                                                value='visa'
                                                checked={paymentMethod === 'visa'}
                                                onChange={() => setPaymentMethod('visa')}
                                                className='mr-2'
                                            />
                                            <label htmlFor='visa' className='flex items-center'>
                                                Visa/MasterCard
                                            </label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input
                                                type='radio'
                                                id='amex'
                                                name='payment'
                                                value='amex'
                                                checked={paymentMethod === 'amex'}
                                                onChange={() => setPaymentMethod('amex')}
                                                className='mr-2'
                                            />
                                            <label htmlFor='amex' className='flex items-center'>
                                                AMEX
                                            </label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input
                                                type='radio'
                                                id='paynow'
                                                name='payment'
                                                value='paynow'
                                                checked={paymentMethod === 'paynow'}
                                                onChange={() => setPaymentMethod('paynow')}
                                                className='mr-2'
                                            />
                                            <label htmlFor='paynow' className='flex items-center'>
                                                PayNow
                                            </label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input
                                                type='radio'
                                                id='paypal'
                                                name='payment'
                                                value='paypal'
                                                checked={paymentMethod === 'paypal'}
                                                onChange={() => setPaymentMethod('paypal')}
                                                className='mr-2'
                                            />
                                            <label htmlFor='paypal' className='flex items-center'>
                                                PayPal
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <h3 className='text-2xl font-bold mb-5'>Payment Details</h3>
                                <div className='bg-white p-6 rounded-lg shadow-lg mb-10'>
                                    <form className='space-y-4' onSubmit={handleSubmitPayment}>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Card Number</label>
                                            <input type='text' className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Expiry Date</label>
                                            <input type='text' className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>CVV</label>
                                            <input type='text' className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <button type='submit' className='w-full bg-black text-white py-3 rounded-lg shadow-lg hover:bg-green-700 transition-transform duration-500 transform hover:scale-105 font-semibold'>
                                            Submit Payment
                                        </button>
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

export default PaymentPage;