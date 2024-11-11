import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './Components/Account';
import Wishlist from './Components/Wishlist';
import Cart from './Components/Cart';
import Stores from './Components/Stores';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

const App = () => {
  return (
  <Router>
      <div className='overflow-x-hidden '>
      
      <Nav /> 
         <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path='/account' element ={<Account />} />
            <Route path="/wishlist" element = {<Wishlist />} />
            <Route path= "/cart" element={<Cart />} />
            <Route path='/stores' element={<Stores />} />
        </Routes>
        
        <Footer />
      </div>
      
      </Router> 
    
  )
}

export default App