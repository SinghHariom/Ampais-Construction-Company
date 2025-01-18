// Components
import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import ScrollToTop from './Parts/ScrollToTop/ScrollToTop';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Work from './Pages/Work/Work';
import GetQuote from './Pages/Get-Quote/Get-Quote';

import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <Loader/>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/Work' element={<Work/>} />
        <Route path='/get-quote' element={<GetQuote/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;