import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { BsCartPlus, BsHeart, BsHeartFill, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [notification, setNotification] = useState({ show: false });

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

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (product) {
          addToCart(product, quantity);
          // Show notification
          setNotification({ show: true });
          
          // Automatically hide the notification after 3 seconds
          setTimeout(() => {
            setNotification({ show: false });
          }, 3000);
        }
      };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <div className="flex flex-1">
                <Sidebar />

                <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 z-50 bg-green-50 border-l-4 border-green-500 p-4 shadow-lg rounded-r-lg max-w-sm"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Added to Cart!</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>{quantity} of {product.title} added to your cart.</p>
                </div>
                <div className="mt-3 flex space-x-4">
                  <button
                    onClick={() => setNotification({ show: false })}
                    className="text-sm text-green-700 hover:text-green-900 font-medium underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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