import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { id, title, price, image, amount } = item;
  const finalPrice = price * amount;
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const handleDecreaseQuantity = () => {
    if (amount > 1) {
      decreaseQuantity(id);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <Link to={`/shop/product/${id}`} className="relative flex items-center gap-4 group">
        <div className="relative w-16 h-18">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 rounded-full group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-sm font-bold">Details</span>
          </div>
        </div>
      </Link>
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold uppercase text-gray-500">{title}</h3>
        <div className="flex items-center space-x-8 mt-2">
          <div className="flex items-center space-x-1 border border-gray-300 p-2 rounded-md">
            <button onClick={handleDecreaseQuantity} className="text-gray-500 hover:text-red-600 transition-colors duration-300 text-2xl ps-2 ">-</button>
            <p className="text-gray-500 hover:text-black transition-colors duration-300 font-semibold ps-2">{amount}</p>
            <button onClick={() => increaseQuantity(id)} className="text-gray-500 hover:text-green-600 transition-colors duration-300 text-2xl ps-2">+</button>
          </div>
          <p className="text-gray-500 font-semibold">${price}</p>
          <p className="font-semibold ml-auto text-black">Total: ${finalPrice.toFixed(2)}</p>
        </div>
      </div>
      <button onClick={() => removeFromCart(id)} className="text-gray-500 hover:text-red-600 transition-colors duration-300 text-2xl cursor-pointer ml-4">
        <IoMdClose />
      </button>
    </div>
  );
}

export default CartItem;