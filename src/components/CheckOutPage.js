import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { FaTruck, FaShippingFast } from 'react-icons/fa';

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
        window.location.href = "/shop/payment";
    };

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
                                    <form className='space-y-4' onSubmit={handleProceedToPayment}>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Full Name</label>
                                            <input type='text' name='fullName' value={formData.fullName} onChange={handleInputChange} className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Email Address</label>
                                            <input type='email' name='email' value={formData.email} onChange={handleInputChange} className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Address</label>
                                            <input type='text' name='address' value={formData.address} onChange={handleInputChange} className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>City</label>
                                            <input type='text' name='city' value={formData.city} onChange={handleInputChange} className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Postal Code</label>
                                            <input type='text' name='postalCode' value={formData.postalCode} onChange={handleInputChange} className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700'>Country</label>
                                            <input type='text' name='country' value={formData.country} onChange={handleInputChange} className='mt-1 block w-full p-2 border border-gray-300 rounded-lg' required />
                                        </div>
                                        <h3 className='text-2xl font-bold mb-5'>Shipping Options</h3>
                                        <div className='bg-white p-6 rounded-lg shadow-lg mb-10'>
                                            <div className='space-y-4'>
                                                <div className='flex items-center'>
                                                    <input
                                                        type='radio'
                                                        id='standard'
                                                        name='shipping'
                                                        value='standard'
                                                        checked={shippingOption === 'standard'}
                                                        onChange={() => setShippingOption('standard')}
                                                        className='mr-2'
                                                    />
                                                    <label htmlFor='standard' className='flex items-center'>
                                                        <FaTruck className='mr-2 text-xl' />
                                                        Standard Delivery
                                                    </label>
                                                </div>
                                                <div className='flex items-center'>
                                                    <input
                                                        type='radio'
                                                        id='next-day'
                                                        name='shipping'
                                                        value='next-day'
                                                        checked={shippingOption === 'next-day'}
                                                        onChange={() => setShippingOption('next-day')}
                                                        className='mr-2'
                                                    />
                                                    <label htmlFor='next-day' className='flex items-center'>
                                                        <FaShippingFast className='mr-2 text-xl' />
                                                        Next Day Delivery
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <button type='submit' className='w-full bg-black text-white py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-transform duration-500 transform hover:scale-105 font-semibold'>
                                            Proceed to Payment
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

export default CheckoutPage;