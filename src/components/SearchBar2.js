import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="container mx-auto my-4">
      <div className="relative">
        <img src="/search.png" alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for products..."
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;