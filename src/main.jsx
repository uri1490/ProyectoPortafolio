import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/Layout";
import { RouterProvider } from "react-router-dom";
//import App from './App.jsx'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Layout}></RouterProvider>
  </React.StrictMode>
);
