import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Login from './Components/login'
import Signup from './Components/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       {/* <Login /> */}
       <Signup />

    </div>
  )
}

export default App
