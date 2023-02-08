import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./Redux/Store";

// const store = useSelector((store) => store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
