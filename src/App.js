import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

//import pages
import Home from './pages/Home';
import ProductDetails from './components/ProductDetails';

//import components
import Register from './components/Register';
import Login from './components/Login';
import Sidebar from './components/Sidebar'
import Header from './components/Header';
import Footer from './components/Footer'; 


function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
