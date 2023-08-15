import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Seed from './pages/Seed'
import Explore from './pages/Explore'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/seed" element={<Seed/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
