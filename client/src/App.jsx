import { useState } from "react";
import reactLogo from "./assets/react.svg";
import AllRoutes from "./components/AllRoutes/AllRoutes";
import Footer from "./components/Homepage/Footer";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SimpleSidebar from "./admin/Admin";
import Carousel from "./components/utility/Carosel";
import Carosel from "./components/utility/Carosel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
     {/* <Carosel/> */}
    </div>
  );
}

export default App;
