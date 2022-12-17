import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './global.css';

import Home from './components/PosterMovie/index';
import Random from './components/Random/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/random" element={<Random />}/>
    </Routes>
  </BrowserRouter>
);


