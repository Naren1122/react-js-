import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> // This is where the nested routes will be rendered , where
      header and footer will remain constant
      <Footer />
    </>
  );
}

export default Layout;
