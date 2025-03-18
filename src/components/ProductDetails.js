import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from './Footer';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    const product = products.find(product => {
        return product.id === parseInt(id);
    });

    if (!product) {
        return <section className='h-screen flex justify-center items-center'>
            Loading...
        </section>
    }

    const { title, price, image, description } = product;

    return (
        <div>
            <Header />
            <div className="flex">
                <Sidebar />
                <section className='mt-20 pt-20 flex-1'>
                    <div className='container mx-auto py-20'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                            <div className='flex justify-center'>
                                <img src={image} alt={title} className='max-w-full max-h-96 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105' />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-4xl font-bold mb-5'>{title}</h2>
                                <p className='text-2xl text-gray-700 mb-5'>${price.toFixed(2)}</p>
                                <p className='text-lg text-gray-600 mb-5'>{description}</p>
                                <button onClick={() => addToCart(product)} className='bg-black text-white px-5 py-3 mt-5 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:bg-gray-800'>
                                    Add to cart
                                </button>
                                <button onClick={() => navigate('/shop/product')} className='bg-black text-white px-5 py-3 mt-5 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:bg-gray-800'>
                                    Back to Products
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetails;