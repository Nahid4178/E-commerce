import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "remixicon/fonts/remixicon.css";
import store from "./redux/Store";


import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ToastContainer
     theme="dark"
    position="top-right"
    autoClose={2000}
    closeOnClick
    pauseOnHover={false}
    />
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
