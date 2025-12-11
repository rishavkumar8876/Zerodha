import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import './index.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./landing-page/home/HomePage.js"
import Signup from "./landing-page/signup/Signup.js"
import AboutPage from "./landing-page/about/AboutPage.js"
import ProductPage from "./landing-page/products/ProductPage.js"
import PricingPage from "./landing-page/pricing/PricingPage.js"
import SupportPage from "./landing-page/support/SupportPage.js"
import Navbar from "./landing-page/Navbar.js"
import Footer from "./landing-page/Footer.js"
import NotFound from "./landing-page/NotFound";
import Login from "./landing-page/login/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/About" element={<AboutPage/>}/>
      <Route path="/Products" element={<ProductPage/>}/>
      <Route path="Pricing" element={<PricingPage/>}/>
      <Route path="/Support" element={<SupportPage/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>

    </BrowserRouter>
    
  
);

