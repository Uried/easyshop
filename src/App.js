import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import pages
import Home from './pages/Home';
import ProductDetails from './components/ProductDetails';

//import components
import Register from './components/Register';
import Login from './components/Login';

import Header from './components/Header';
import Footer from './components/Footer'; 

import AddProduct from './components/AddProduct'


function App() {
  return (
    <div className="overflow-hidden">
      <Router>
      
        <Routes>
          <Route path='/login' element={<Login />} />  
          <Route path='/register' element={<Register  />} />  
         
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />

           </Routes>
      
                         
        
      </Router>
    </div>
  );
}

export default App;
