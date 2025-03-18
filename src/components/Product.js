import React from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsCartPlus } from 'react-icons/bs';

const Product = ({ product }) => {
  if (!product) {
    return null;
  }

  const { id, title, price, image, category } = product;

  return (
    <div className='flex flex-col items-center mb-8 font-inter'>
      {/* Product Card with Image and Hover Actions */}
      <div className='border border-gray-200 rounded-lg overflow-hidden group transition relative bg-white p-4'>
        <div className='relative w-[200px] flex justify-center items-center'>
          <img
            className='max-h-[200px] group-hover:scale-110 transition duration-300'
            src={image}
            alt={title}
          />

          {/* Floating Buttons (Appear on Hover) */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-y-2">
            {/* Add to Cart Button */}
            <button className='w-10 h-10 bg-red-500 text-white rounded-full flex justify-center items-center shadow-lg hover:scale-110 transition duration-300'>
              <BsCartPlus className='text-xl' />
            </button>
            {/* View Product Button */}
            <Link 
              to={`/product/${id}`} 
              className='w-10 h-10 bg-white flex justify-center items-center rounded-full shadow-lg hover:scale-110 transition duration-300'
            >
              <BsEyeFill className='text-xl text-blue-500' />
            </Link>
          </div>
        </div>
      </div>

      {/* Product Details BELOW the Card */}
      <div className='mt-3'>
        <p className='text-gray-500 text-sm capitalize'>{category}</p> {/* Category */}
        <h3 className='text-base font-semibold text-black'>{title}</h3> {/* Product Title */}
        <p className='text-black font-semibold text-base'>${price}</p> {/* Price */}
      </div>
    </div>
  );
}

export default Product;