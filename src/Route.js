// src/Routes.js
import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'
import App from './App';
import Favorites from './Pages/Favorites';
import KalaamDetails from './Pages/KalaamDetails';
import Search from './Pages/Search';
import Gallery from './Pages/Gallery';
import Media from './Pages/Media';
import KalaamOfTheDay from './Pages/KalaamOfTheDay';

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/kalaam/:id" element={<KalaamDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/media" element={<Media />} />
      <Route path="kalaamoftheday" element={<KalaamOfTheDay/>}/>
    </Routes>
  </Router>
);

export default RoutesComponent;
