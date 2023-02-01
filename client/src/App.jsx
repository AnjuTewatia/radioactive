import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AllRoutes from './components/AllRoutes/AllRoutes'
import Home from './components/Homepage/Home'
// import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
        
    </div>
  )
}

export default App
