
import React from 'react'
import {Routes,Route}from"react-router-dom"
import Cosmetics from '../pages/Cosmetics'
import Electronics from '../pages/Electronics'
import Health from '../pages/Health'
import Home from '../Homepage/Home'
import Bags from "../pages/Page"
import SignUp from "../Loginsignup/signUp"

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/clothes" element={<Bags/>}></Route>
        <Route path="/health" element={<Health/>}></Route>
        <Route path="/electronics" element={<Electronics/>}></Route>
        <Route path="/cosmetics" element={<Cosmetics/>}></Route>

        {/* <Route path="/signup" element={<SignUp/>}></Route> */}




    </Routes>

        
    </>
  )
}

export default AllRoutes