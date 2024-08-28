import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import './assets/css/custom.css'
import Login from './Components/login'
import Signup from './Components/signup'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Locations from "./pages/Locations";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" index element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<Layout />}> 
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/locations" element={<Locations />}></Route>
      </Route>
      
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
