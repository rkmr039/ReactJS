import React from "react";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";

const CartApp = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default CartApp;
