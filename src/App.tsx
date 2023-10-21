import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavbarWrapper from "./components/Navbar/NavbarWrapper"
import Reset from "./pages/Reset"
import ResetForm from "./pages/ResetForm"

const App = () => {
  return (
    <BrowserRouter>
    <NavbarWrapper/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/reset/:id/:token" element={<ResetForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
