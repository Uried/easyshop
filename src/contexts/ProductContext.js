import React from 'react';
import { createContext, useState, useEffect } from 'react';


//creer contexte
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //products state
  const [products, setProducts] = useState([]);
  //fetch produits
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [])
  return ( 
  <ProductContext.Provider value={{products}}>
    {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
