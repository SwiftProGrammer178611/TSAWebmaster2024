// src/Routes.js
import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'
import App from './App';
import About from './Pages/About';
import Order from './Pages/Order';
import FormsPage from './Pages/FormsPage';
import MenuPage from './Pages/MenuPage';

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/favorites" element={<Favorites />} />
      <Route path="/kalaam/:id" element={<KalaamDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/media" element={<Media />} />
      <Route path="kalaamoftheday" element={<KalaamOfTheDay/>}/> */}
      <Route path="/About" element={<About />} />
      <Route path="/FormsPage" element={<FormsPage />} />
      <Route path="/MenuPage" element={<MenuPage />} />
      <Route path="/Order" element={<Order />} />
    </Routes>
  </Router>
);

export default RoutesComponent;
