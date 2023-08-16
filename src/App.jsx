import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Seed from './pages/Seed'
import Explore from './pages/Explore'
import StoryDetail from './components/StoryDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/seed" element={<Seed/>}/>
          <Route path='/story/:id' element={<StoryDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
