import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Banner'
import Model from "./Model"
import Video from './Vedio'




const Home = () => {
  return (
    <div>
        <div >
       <Banner />
      <Model />
      <Video />

    </div>
    </div>
    
  )
}

export default Home