import React, { useContext, useState } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import Product from '../../components/Product';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import SearchBar from '../../components/SearchBar2';

const ShopPage = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Header />
      <Hero />
      <Sidebar />
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