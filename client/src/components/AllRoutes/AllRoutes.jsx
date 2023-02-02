
import React from 'react'
import {Routes,Route}from"react-router-dom"
import Health from '../Health/Health'
import Home from '../Homepage/Home'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/health" element={<Health/>}></Route>

    </Routes>
        
    </>
  )
}

export default AllRoutes