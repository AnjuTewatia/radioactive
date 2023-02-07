
import React from 'react'
import {Routes,Route}from"react-router-dom"
import Cosmetic from '../page/Clothes/Cosmetics'
import Electronics from '../page/Clothes/Electronics'
import Health from '../page/Clothes/Health'
import Home from '../Homepage/Home'
// import Bags from "../pages/Page"
import AllProduct from "../Page/Clothes/Allproduct"
import SignUp from "../Loginsignup/signUp"
import Jewellery from "../page/Clothes/Jewellery"
import  Womens from '../Page/Clothes/Womens'
import Kids from '../Page/Clothes/Kids'
import SingleProduct from '../Page/Clothes/SingleProduct'
import Cart from '../Page/Cart/Cart'
import Mens from '../Page/Clothes/Mens'
import Login from '../Loginsignup/Login'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/allproduct" element={<AllProduct/>}></Route>
        <Route path="/clothes" element={<Mens/>}></Route>
        <Route path="/health" element={<Health/>}></Route>
        <Route path="/electronics" element={<Electronics/>}></Route>
        <Route path="/cosmetics" element={<Cosmetic/>}></Route>
        <Route path="/jewellery" element={<Jewellery/>}></Route>
        <Route path='/women' element={<Womens/>}/>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>

        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>




    </Routes>

        
    </>
  )
}

export default AllRoutes