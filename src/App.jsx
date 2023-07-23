import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
