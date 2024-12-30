// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import RoutesComponent from './Route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesComponent />
  </React.StrictMode>
);
