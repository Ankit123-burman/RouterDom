import { useState } from 'react'
import Login from './component/Login'
import SingUp from './component/SingUp'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Hero from './component/Hero'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Blog from './component/Blog'

function App() {
    
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/hero" element={<Hero/>}/>
      <Route path="/singUp" element={<SingUp />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
