import React from 'react';
import './Gallery.css';
import 'react-router';
import {Route, Routes } from 'react-router-dom';
import Deserts from './Deserts';
import Home from './Home';


function Gallery() {
  return (
    <div className="main_content">
      <Routes>
        <Route path="/gallery/sb1" element={<Deserts />} />
        <Route path="/gallery/sb2" element={<Home />} />
      </Routes>
      <div>123</div>
    </div>
  );
}

export default Gallery;
