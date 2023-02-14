import { useState } from "react";
import reactLogo from "./assets/react.svg";
import AllRoutes from "./components/AllRoutes/AllRoutes";
import Footer from "./components/Homepage/Footer";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./admin/Admin";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <AllRoutes />
      <Footer /> */}
      <Admin/>
    </div>
  );
}

export default App;
