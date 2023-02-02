import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AllRoutes from './components/AllRoutes/AllRoutes'
import Bags from './components/Homepage/page'

// import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
       <Bags/>
    </div>
  )
}

export default App
