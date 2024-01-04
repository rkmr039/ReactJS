import React from "react";
import { AppContextProvider } from "./context";
import Hero from "./Hero";
import "./index.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
function StripeApp() {
  return (
    <AppContextProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppContextProvider>
  );
}

export default StripeApp;
