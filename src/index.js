import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FindJob from './components/FindJob';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import SignIn from './components/Sign-in';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>

      <Router>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/home/about/' Component={About} /> 
           <Route path='/home/about/:section' Component={About} />
          <Route path='/jobs' Component={FindJob} /> 
       {/*  <Route path='/home/hris' Component={Products} /> */}
          <Route path='/home/blog' Component={Blog} /> 
          <Route path='/home/faq' Component={FAQ} />
          <Route path='/home/contact-us' Component={Contact} />
         <Route path='/jobs/sign-in' Component={SignIn} />
         {/*
          <Route path='/jobs/submit-job' Component={SignIn} />
          <Route path='/jobs/register' Component={SignIn} />
          <Route path='/jobs/register-candidate' Component={SignIn} />
          <Route path='/jobs/register-employer' Component={SignIn} />  */}
  
         </Routes>
      </Router> 
    </HelmetProvider>
  </React.StrictMode>
);


