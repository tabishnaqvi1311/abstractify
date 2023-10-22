import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import NavbarWrapper from "./components/Navbar/NavbarWrapper"
import Reset from "./pages/Reset"
import ResetForm from "./pages/ResetForm"
import Feed from "./pages/Feed"
import Seed from "./pages/Seed"
import { useAuthContext } from "./hooks/useAuthContext"

const App = () => {

  const {user} = useAuthContext();

  return (
    <BrowserRouter>
    <NavbarWrapper/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feed" element={user ? <Feed/> : <Navigate to={"/"}/>}/>
        <Route path="/seed" element={<Seed/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/reset/:id/:token" element={<ResetForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
