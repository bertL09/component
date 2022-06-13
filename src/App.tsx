import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Deserts from './components/Deserts';
import Gallery from './components/Gallery';
import Home from './components/Home';
import DesertsItem from './components/DesertsItem';
import ErrorPage from './components/ErrorPage';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="deserts" element={<Deserts />} />
          <Route path='deserts/:desertsId' element={<DesertsItem />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}