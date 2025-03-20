import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import Product from '../../components/Product';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FiFilter, FiStar, FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../../components/Sidebar';

const ShopPage = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState({ show: false, product: null });

  useEffect(() => {
    setFilteredProducts(products);
    
    const uniqueCategories = ['all', ...new Set(products.map(item => item.category))];
    setCategories(uniqueCategories);
  }, [products]);

  const handleProductAdded = (product) => {
    setNotification({ show: true, product });
    
    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, product: null });
    }, 3000);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    filterProducts(searchTerm, selectedCategory, priceRange[1]);
  };
  
  const handleInlineSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterProducts(value, selectedCategory, priceRange[1]);
  };
  
  const filterProducts = (search, category, maxPrice) => {
    const filtered = products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === 'all' || product.category === category;
      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(searchTerm, category, priceRange[1]);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceRange([0, Number(value)]);
    filterProducts(searchTerm, selectedCategory, Number(value));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} />
      <Sidebar />

      <AnimatePresence>
        {notification.show && notification.product && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 z-50 bg-green-50  border-green-500 p-4 border-l-4 shadow-lg rounded-r-lg max-w-sm"
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
                  <p>{notification.product.title} has been added to your cart.</p>
                </div>
                <div className="mt-3">
                  <button
                    onClick={() => setNotification({ show: false, product: null })}
                    className="text-sm text-green-700 hover:text-green-900 font-medium underline"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hero section above products*/}
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4">
          <motion.section 
            className="mb-10 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
              <motion.div 
                className="absolute top-10 right-[15%] w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute bottom-10 left-[20%] w-12 h-12 rounded-full bg-white/10 backdrop-blur-md"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut" 
                }}
              />
              <div className="container mx-auto px-6 py-10 md:py-14 relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 text-white mb-6 lg:mb-0">
                  <motion.h1 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Ensign Shop
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                      {" "}Products for You
                    </span>
                  </motion.h1>
                </div>
                <div className="w-full lg:w-1/2 relative">
                  <motion.div
                    className="relative mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <img 
                      src="/bird.png" 
                      alt="Product Showcase" 
                      className="w-40 max-w-md mx-auto h-auto object-contain"
                    />
                    <motion.div
                      className="absolute top-1/4 -right-4 bg-white rounded-lg p-2 shadow-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      style={{ pointerEvents: 'none' }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="bg-amber-100 p-1.5 rounded-full">
                          <FiStar className="text-amber-600 text-sm" />
                        </div>
                        <p className="font-medium text-gray-800 text-xs">Top Rated</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Search bar */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleInlineSearch}
                  placeholder="Search for products..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                {searchTerm && (
                  <button
                    onClick={() => handleSearch('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </motion.div>     

          {/* Filters */}     
          <div className="flex flex-col md:flex-row">
            <div className="md:hidden mb-4 flex justify-end">
              <button 
                onClick={() => setShowFilters(!showFilters)} 
                className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 rounded-lg"
              >
                <FiFilter />
                <span>Filters</span>
              </button>
            </div>
            <aside className={`${showFilters ? 'block' : 'hidden'} md:block md:w-64 mr-8`}>
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h2 className="text-lg font-semibold mb-4 uppercase">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryChange(category)}
                        className={`w-full text-left px-2 py-1 rounded ${
                          selectedCategory === category 
                            ? 'bg-emerald-500 text-white uppercase font-semibold' 
                            : 'text-gray-800 hover:bg-gray-100 uppercase font-semibold'
                        }`}
                      >
                        {category === 'all' ? 'All Categories' : category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Price Range</h2>
                <div className="mb-4 font-semibold">
                  <p>Up to ${priceRange[1]}</p>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                  className="w-full h-2 bg-gray-200 rounded appearance-none cursor-pointer"
                />
              </div>
            </aside>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {searchTerm ? `Results for "${searchTerm}"` : "All Products"}
                </h2>
                <span className="text-sm text-gray-500">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                </span>
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl">
                  <FiSearch className="text-5xl text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl text-gray-600">No products found matching your criteria</h3>
                  <p className="text-gray-400 mt-2">Try adjusting your search or filter options</p>
                  {searchTerm && (
                    <button 
                      onClick={() => handleSearch('')} 
                      className="mt-4 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium hover:bg-indigo-200"
                    >
                      Clear Search
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <Product key={product.id} product={product} onAddToCart={() => handleProductAdded(product)} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;