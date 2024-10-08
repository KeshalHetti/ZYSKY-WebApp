import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import './assets/css/custom.css'
import Login from './Components/login'
import Signup from './Components/signup'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Newlocations from "./pages/Newlocation";
import Promos from "./pages/promos";
import NewPromo from "./pages/Newpromo";
import Notifications from "./pages/Notifications";
import Newnotifications from "./pages/Newnotifications";
import Transactions from './pages/Transactions';
import Account from './pages/Account';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" index element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<Layout />}> 
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/locations" element={<Locations />}></Route>
      <Route path="/newlocation" element={<Newlocations />}></Route>
      <Route path="/promos" element={<Promos />}></Route>
      <Route path="/newpromo" element={<NewPromo />}></Route>
      <Route path="/notifications" element={<Notifications />}></Route>
      <Route path="/newnotifications" element={<Newnotifications />}></Route>
      <Route path="/transactions" element={<Transactions />}></Route>
      <Route path="/account" element={<Account />}></Route>
      </Route>
      
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
