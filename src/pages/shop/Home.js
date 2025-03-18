import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import Product from '../../components/Product';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';

const ShopPage = () => {
  const { products } = useContext(ProductContext);

  // Categorize products
  const clothingProducts = products.filter(product =>
    product.category === "men's clothing" || product.category === "women's clothing"
  );
  const electronicsProducts = products.filter(product =>
    product.category === "electronics"
  );
  const jeweleryProducts = products.filter(product =>
    product.category === "jewelery"
  );

  return (
    <div>
      <Header />
      <Hero />
      <Sidebar />
      <section className='pt-20 py-20'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {clothingProducts.map(product => (
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