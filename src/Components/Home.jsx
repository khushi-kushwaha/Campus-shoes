import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Banner'
import Model from "./Model"
import Video from './Vedio'
import ProductList from './ProductList';


const Home = () => {
  return (
    <div>
        
         <Banner />
         <ProductList />
         <Model />
          <Video />

    
    </div>
    
  )
}

export default Home