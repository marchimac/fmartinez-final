import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MealsProvider } from './context/MealsContext';
import Routing from './components/Routing';
import { BrowserRouter } from 'react-router-dom';
import HeaderComp from './components/HeaderComp';
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <MealsProvider>
      <BrowserRouter>
        <HeaderComp />
        <NavbarComp />
        <Routing />
        <FooterComp />
      </BrowserRouter>
    </MealsProvider>
  // </React.StrictMode>
);