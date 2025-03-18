import React from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsPlus } from 'react-icons/bs';

const Product = ({ product }) => {
  if (!product) {
    return null;
  }

  const { id, title, price, image } = product;

  return (
    <div className='border border-gray-200 rounded-lg overflow-hidden group transition'>
      <div className='w-full h-full flex flex-col items-center'>
        {/* Product Image */}
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img
            className='max-h-[160px] group-hover:scale-110 transition duration-300'
            src={image}
            alt={title}
          />
        </div>
        {/* Product Details */}
        <div className='p-4 text-center'>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <p className='text-gray-500'>${price}</p>
          <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
            <Link to={`/shop/product/${id}`}>
              <BsEyeFill className='inline-block' />
              View
            </Link>
          </button>
          <button className='mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300'>
            <BsPlus className='inline-block' />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;