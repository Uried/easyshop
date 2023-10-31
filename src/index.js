import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//product provider
import ProductProvider from './contexts/ProductContext';
//sidebar provider
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';
import ManageProvider from './contexts/ManageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ManageProvider>
  <SidebarProvider>
  <CartProvider>
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
  </CartProvider>
  </SidebarProvider>
  </ManageProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals