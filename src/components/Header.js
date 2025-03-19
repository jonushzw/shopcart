import React, { useContext, useState, useEffect } from 'react';
import { SideBarContext } from '../contexts/SideBarContext';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { BsCart3,} from 'react-icons/bs';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const { sideBar, setSideBar } = useContext(SideBarContext);
  const { cart } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  
  return (
    <header className={`${isActive ? 'bg-white shadow-lg' : 'bg-transparent'} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent uppercase">
            Ensign
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          
          <nav className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Back to Root</Link>
            <Link to="/shop/product" className="text-gray-600 hover:text-blue-600 font-medium">Shop</Link>
          </nav>
          
          <div onClick={() => setSideBar(!sideBar)} className="cursor-pointer relative">
            <BsCart3 className="text-2xl" />
            {cart.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white h-5 w-5 rounded-full flex items-center justify-center text-xs">
                {cart.length}
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <div onClick={() => setSideBar(!sideBar)} className="mr-4 relative">
            <BsCart3 className="text-2xl" />
            {cart.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white h-5 w-5 rounded-full flex items-center justify-center text-xs">
                {cart.length}
              </div>
            )}
          </div>
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3">      
            <nav className="flex flex-col space-y-3 pb-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Back to Root</Link>
              <Link to="/shop/product" className="text-gray-600 hover:text-blue-600 font-medium">Shop</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;