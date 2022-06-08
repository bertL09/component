import React from 'react';
import './css/Gallery.css';
import 'react-router';
import Navbar from './Navbar';
import { Outlet, Link, useRoutes, useParams, Route, useMatch,Routes } from 'react-router-dom';
import Booking from './Booking';
import Home from './Home';


function Gallery() {
  return (
    <div className="imgGallery">
      <Routes>
        <Route path="/gallery/sb1" element={<Booking />} />
        <Route path="/gallery/sb2" element={<Home />} />
      </Routes>
      <div>123</div>
    </div>
  );
}

export default Gallery;
