import React, { useContext, useState } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import Product from '../../components/Product';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import SearchBar from '../../components/SearchBar2';
import FilterDrawer from '../../components/FilterDrawer';

const ShopPage = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filters) => {
    let filtered = products;

    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.category));
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        const price = product.price;
        return max ? price >= min && price <= max : price >= min;
      });
    }

    setFilteredProducts(filtered);
  };

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div>
      <Header />
      <Hero />
      <Sidebar />
      <FilterDrawer categories={categories} onFilterChange={handleFilterChange} />
      <SearchBar onSearch={handleSearch} />
      <section className='pt-20 py-20'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filteredProducts.map(product => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ShopPage;