import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './components/About';
import Home from './components/Home';
import FindJob from './components/FindJob';
import FAQ from './components/FAQ';
import {HelmetProvider} from 'react-helmet-async'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Home/>
    </HelmetProvider>
  </React.StrictMode>
);


