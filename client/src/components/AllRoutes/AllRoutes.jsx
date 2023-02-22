import React from "react";
import { Routes, Route } from "react-router-dom";
import SimpleSidebar from "../../admin/Admin";
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
import AdminDshboardPage from "../Page/AdminPage/AdminDshboardPage";
import AdminShowProduct from "../Page/AdminPage/AdminShowProduct";
import Navbar from "../AdminComponents/AdminNavbar/Navbar";
import AdminAddProduct from "../AdminComponents/AdminProduct/AdminAddProduct";
import AdminUpdate from "../AdminComponents/AdminProduct/AdminUpdate";
import AdminLogin from "../Page/AdminPage/AdminLogin";
import AdminShowUser from "../Page/AdminPage/AdminShowUser";
import SearchPage from "../Page/Searchpage/SearchPage"

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
        <Route path="/search/:search" element={<SearchPage/>}></Route>

        <Route
          path="/singleproduct/:id"
          element={
            // <PrivateRoute>
              <SingleProduct />
            // </PrivateRoute>
          }
        ></Route>

        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/cart"
          element={
            // <PrivateRoute>
              <Cart />
            //  {/* </PrivateRoute> */}
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            // <PrivateRoute>
              <Checkout />
            // {/* </PrivateRoute> */}
          }
        ></Route>
        {/* <Route path="admin" element={<SimpleSidebar />}></Route> */}

        <Route path="/admin" element={
          <>
          <Navbar/>
        <AdminDshboardPage/>
        </>
        }/>
        <Route path="/admin/product" element={<AdminShowProduct/>}/>
        <Route path="/admin/addProduct" element={<AdminAddProduct/>}/>
        <Route path="/admin/update/:id" element={<AdminUpdate/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/admin/user" element={
          <>
          <Navbar/>
        <AdminShowUser/>
        </>

        }/>
      </Routes>
    </>
  );
};

export default AllRoutes;
