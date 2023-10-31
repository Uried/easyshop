import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';


//creer contexte
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //products state
  const [products, setProducts] = useState([]);
  //fetch produits
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        const data = response.data.data; // Accéder à la propriété 'data'
        console.log(data);
        if(Array.isArray(data)){
          setProducts(data);
        } else {
            console.log('the response is not an array')
        }
      } catch (error) {
        if (error.response) {
          // Une réponse avec un statut autre que 2xx a été reçue
          console.error('Erreur de réponse:', error.response.data);
          } else if (error.request) {
          // La requête a été faite, mais aucune réponse n'a été reçue
          console.error('Pas de réponse reçue:', error.request);
          } else {
          // Une erreur s'est produite lors de la configuration de la requête
          console.error('Erreur lors de la configuration de la requête:', error.message);
          }
      }
    };
    fetchProducts();
  }, []);
  
  return ( 
  <ProductContext.Provider value={{products}}>
    {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
