import React from 'react';

const Navbar = ({ setCategory }) => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-white">Shopify</a>

          {/* Category Buttons */}
          <div className="hidden md:flex space-x-4">
            <button onClick={() => setCategory("all")} className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
              All
            </button>
            <button onClick={() => setCategory("men's clothing")} className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
              Men's Clothing
            </button>
            <button onClick={() => setCategory("women's clothing")} className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
              Women's Clothing
            </button>
            <button onClick={() => setCategory("electronics")} className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
              Electronics
            </button>
            <button onClick={() => setCategory("jewelery")} className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
              Jewelry
            </button>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="/shop/cart" className="text-white hover:text-yellow-300 flex items-center">
              <span className="mr-2">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> 
                <circle cx="9" cy="21" r="1"/> <circle cx="20" cy="21" r="1"/> 
                <path d="M1 1h4l2 13h13l2-7H6"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button id="menu-btn" className="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
