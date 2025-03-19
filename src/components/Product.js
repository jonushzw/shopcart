import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCartPlus, BsHeart, BsHeartFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { motion } from 'framer-motion';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, title, price, image, category } = product;
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  return (
    <motion.div 
      className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative'
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='p-4'>
        <div className='relative'>
          <Link to={`/shop/product/${id}`} className='block overflow-hidden rounded-lg'>
            <img
              className='w-full h-48 object-contain transition-transform duration-300 hover:scale-105'
              src={image}
              alt={title}
            />
          </Link>
          <button 
            onClick={() => setIsWishlisted(!isWishlisted)}
            className='absolute top-0 right-0 m-2 w-8 h-8 bg-white bg-opacity-70 backdrop-blur-sm 
                      rounded-full flex justify-center items-center transition-all duration-300
                      hover:bg-opacity-100'
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isWishlisted ? 
              <BsHeartFill className='text-red-500' /> : 
              <BsHeart className='text-gray-600' />
            }
          </button>
        </div>
      </div>
      
      <div className='p-4 border-t border-gray-100'>
        <p className='text-xs font-medium text-blue-500 uppercase tracking-wider'>{category}</p> 
        <Link to={`/shop/product/${id}`}>
          <h3 className='mt-1 text-lg font-medium text-gray-900 truncate hover:text-blue-600 transition'>{title}</h3>
        </Link>
        <div className='mt-2 flex items-center justify-between'>
          <p className='text-xl font-semibold text-gray-900'>${price.toFixed(2)}</p>
          <div className="flex items-center gap-2">
            {isWishlisted && (
              <span className="text-xs text-red-500 font-medium">Saved</span>
            )}
            <button 
              onClick={() => addToCart(product, 1)} 
              className='flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition'
            >
              <BsCartPlus className='text-xl' />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;