import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AllRoutes from './components/AllRoutes/AllRoutes'
import Footer from './components/Homepage/Footer'
// import Bags from './components/Homepage/page'

// import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    <Footer/>
       
    </div>
  )
}

export default App
