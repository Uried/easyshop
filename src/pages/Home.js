import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Manage from '../components/Manage';

const Home = () => {
  //get products from products context
  const { products } = useContext(ProductContext);

  console.log(products);
  //get only men's and women's clothing category
  const filteredproducts = products.filter(item => {
   //return item.category === "652c3a123739c929461bcb72" || item.category === "women's clothing"
   return item.category === "652c3a123739c929461bcb72";

  });

  console.log(filteredproducts);
  return (
    <>
    <Header />
  <div>
    <Hero />
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto- md:max-w-none md:mx-0'>
          {filteredproducts.map((product) => {
            return <Product product={product} key={product._id} />
          })}
        </div>
      </div>
    </section>
  </div>
  <Sidebar />
  <Manage />
  <Footer/>
  </>
  );
}; 

export default Home;
