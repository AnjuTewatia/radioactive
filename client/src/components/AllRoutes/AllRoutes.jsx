import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Homepage/Home";
import Login from "../Loginsignup/Login";
import SignUp from "../Loginsignup/SignUp";
import Cart from "../Page/Cart/Cart";
import Checkout from "../Page/Cart/Checkout";
import AllProduct from "../Page/Clothes/Allproduct";
import Cosmetics from "../Page/Clothes/Cosmetics";
import Electronics from "../Page/Clothes/Electronics";
import Health from "../Page/Clothes/Health";
import Jewellery from "../Page/Clothes/Jewellery";
import Kids from "../Page/Clothes/Kids";
import Mens from "../Page/Clothes/Mens";
import SingleProduct from "../Page/Clothes/SingleProduct";
import Womens from "../Page/Clothes/Womens";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allproduct" element={<AllProduct />}></Route>
        <Route path="/clothes" element={<Mens />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/cosmetics" element={<Cosmetics />}></Route>
        <Route path="/jewellery" element={<Jewellery />}></Route>
        <Route path="/women" element={<Womens />} />
        <Route path="/kids" element={<Kids />}></Route>

        <Route
          path="/singleproduct/:id"
          element={
            <PrivateRoute>
              <SingleProduct />
            </PrivateRoute>
          }
        ></Route>

        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
