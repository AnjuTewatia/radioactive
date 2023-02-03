
import React from 'react'
import {Routes,Route}from"react-router-dom"
import Cosmetics from '../Health/Cosmetics'
import Electronics from '../Health/Electronics'
import Health from '../Health/Health'
import Home from '../Homepage/Home'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/health" element={<Health/>}></Route>
        <Route path="/electronics" element={<Electronics/>}></Route>
        <Route path="/cosmetics" element={<Cosmetics/>}></Route>




    </Routes>

        
    </>
  )
}

export default AllRoutes