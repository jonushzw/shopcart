import React, { useState } from 'react';

const FilterDrawer = ({ categories, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onFilterChange({ categories: updatedCategories, priceRange: selectedPriceRange });
  };

  const handlePriceChange = (event) => {
    setSelectedPriceRange(event.target.value);
    onFilterChange({ categories: selectedCategories, priceRange: event.target.value });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange('');
    onFilterChange({ categories: [], priceRange: '' });
  };

  return (
    <>
      <button onClick={toggleDrawer} className="fixed bottom-4 left-4 bg-white text-white p-3 rounded-full shadow-lg z-50 hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105">
        <img src="/filter.png" alt="Filter" className="w-6 h-6" />
      </button>
      <div className={`fixed top-0 left-0 h-full bg-white shadow-2xl z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={toggleDrawer} className="absolute top-4 right-4 z-50 text-white">
          <span className="text-2xl">{isOpen ? '←' : '→'}</span>
        </button>
        <div className="p-6 text-white">
          <h2 className="text-2xl font-bold mb-6">Filters</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-black uppercase">Product Category</h3>
            {categories.map(category => (
              <div key={category} className="flex items-center mb-3 text-black uppercase font-semibold ">
                <input
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                <label htmlFor={category} className="text-sm">{category}</label>
              </div>
            ))}
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-black uppercase">Price Range</h3>
            <select value={selectedPriceRange} onChange={handlePriceChange} className="w-full p-2 border border-gray-300 rounded-lg text-black font-semibold">
              <option value="">All</option>
              <option value="0-50">$0 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="200+">$200+</option>
            </select>
          </div>
          <button onClick={clearAllFilters} className="w-full bg-red-500 text-white py-2 rounded-lg shadow-lg hover:bg-red-600 transition-transform duration-300 transform hover:scale-105 font-semibold uppercase">
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterDrawer;