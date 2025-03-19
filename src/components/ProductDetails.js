import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { BsCartPlus, BsHeart, BsHeartFill, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { motion } from 'framer-motion';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const product = products.find(product => {
        return product.id === parseInt(id);
    });

    useEffect(() => {
        if (product) {
            const related = products.filter(
                p => p.category === product.category && p.id !== product.id
            ).slice(0, 4);
            setRelatedProducts(related);
        }
    }, [product, products]);

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }
    
    const { title, price, image, description, category } = product;

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 pt-24 pb-12">
                    <div className="container mx-auto px-4">
                        <nav className="flex py-4 text-sm">
                            <button onClick={() => navigate('/')} className="text-gray-500 hover:text-blue-600">Home</button>
                            <span className="mx-2 text-gray-500">/</span>
                            <button onClick={() => navigate('/shop/product')} className="text-gray-500 hover:text-blue-600">Shop</button>
                            <span className="mx-2 text-gray-500">/</span>
                            <span className="text-gray-900">{title}</span>
                        </nav>

                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6 mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <motion.div 
                                        className="mb-4 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <img 
                                            src={image} 
                                            alt={title} 
                                            className="max-h-96 object-contain p-8" 
                                        />
                                    </motion.div>
                                </div>
                                <div>
                                    <span className="inline-block text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">
                                        {category}
                                    </span>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
                                    
                                    <div className="flex items-center mb-4">
                                        <div className="flex text-yellow-400">
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarHalf />
                                        </div>
                                        <span className="text-gray-500 ml-2">4.5 (24 reviews)</span>
                                    </div>
                                    
                                    <div className="text-3xl font-bold text-gray-900 mb-6">
                                        ${price.toFixed(2)}
                                    </div>
                                    
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold mb-2">Description</h3>
                                        <p className="text-gray-600">{description}</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                                        <div className="flex items-center">
                                            <button 
                                                onClick={decreaseQuantity} 
                                                className="bg-gray-200 text-gray-700 w-10 h-10 rounded-l-lg flex items-center justify-center hover:bg-gray-300 transition"
                                            >
                                                -
                                            </button>
                                            <span className="w-14 h-10 flex items-center justify-center border-t border-b border-gray-200">
                                                {quantity}
                                            </span>
                                            <button 
                                                onClick={increaseQuantity} 
                                                className="bg-gray-200 text-gray-700 w-10 h-10 rounded-r-lg flex items-center justify-center hover:bg-gray-300 transition"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="flex space-x-4">
                                        <button 
                                            onClick={handleAddToCart}
                                            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
                                        >
                                            <BsCartPlus className="mr-2" />
                                            Add to Cart
                                        </button>
                                        <button 
                                            onClick={() => setIsWishlisted(!isWishlisted)}
                                            className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                                        >
                                            {isWishlisted ? 
                                                <BsHeartFill className="text-red-500" /> : 
                                                <BsHeart />
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {relatedProducts.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Related Products</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {relatedProducts.map(product => (
                                        <div 
                                            key={product.id}
                                            className="bg-white rounded-lg shadow-sm p-4 transition-transform hover:scale-105"
                                            onClick={() => {
                                                navigate(`/shop/product/${product.id}`);
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            <img 
                                                src={product.image} 
                                                alt={product.title} 
                                                className="w-full h-40 object-contain mb-4" 
                                            />
                                            <h4 className="font-medium text-gray-900 truncate">{product.title}</h4>
                                            <p className="text-blue-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetails;