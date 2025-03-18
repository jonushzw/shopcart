import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsCartPlus } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, title, price, image, category } = product;

  return (
    <div className='flex flex-col items-center mb-8 font-inter w-full'>
      <div className='border border-gray-200 rounded-lg overflow-hidden group transition relative bg-white p-4 w-full'>
        <div className='relative w-full flex justify-center items-center'>
          <img
            className='max-h-[200px] group-hover:scale-110 transition duration-300'
            src={image}
            alt={title}
          />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-y-2">
            {/* Add to Cart Button */}
            <button onClick={() => addToCart(product, id)} className='w-10 h-10 bg-red-500 text-white rounded-full flex justify-center items-center shadow-lg hover:scale-110 transition duration-300'>
              <BsCartPlus className='text-xl' />
            </button>
            <Link 
              to={`/shop/product/${id}`} 
              className='w-10 h-10 bg-white flex justify-center items-center rounded-full shadow-lg hover:scale-110 transition duration-300'
            >
              <BsEyeFill className='text-xl text-black-500' />
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-3 w-full text-center'>
        <p className='text-gray-500 text-sm capitalize'>{category}</p> {/* Category */}
        <h3 className='text-base font-semibold text-black'>{title}</h3> {/* Product Title */}
        <p className='text-black font-semibold text-base'>${price}</p> {/* Price */}
      </div>
    </div>
  );
}

export default Product;