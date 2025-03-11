import { useState } from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import "./app.css";



function App() {

  return (
    <div className='app'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/haqimizda' element={<About />}/>
        <Route path="/boglanish" element={<Contact />}/>
        <Route path="/xizmatlar" element={<Services />}/>
      </Routes>

    </div>
  )
}

export default App;
