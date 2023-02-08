import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AllRoutes from './components/AllRoutes/AllRoutes'
import Footer from './components/Homepage/Footer'
// import SignUp from './components/Loginsignup/SignUp'

// import './App.css'
import SignUp from "./components/Loginsignup/SignUp"
import Navbar from './components/Navbar/Navbar'
import SingleProduct from './components/Page/Clothes/SingleProduct'
// import Carousel  from "./components/utility/Carosel"


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    <Footer/>
    {/* <Login/> */}
    <SignUp/>
       
      {/* <SingleProduct/> */}
      
    </div>
  )
}

export default App
