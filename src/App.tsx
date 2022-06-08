import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/gallery" element={<Gallery />} >
            {/* <Navbar/> */}
            {/* <Route path="/gallery/sb1" element={<Gallery />} />
            <Route path="/gallery/sb2" element={<Gallery />} />
            <Route path="/gallery/sb3" element={<Gallery />} /> */}
          </Route>
        </Routes>
        <Outlet/>
      </BrowserRouter>
    );
  }
}