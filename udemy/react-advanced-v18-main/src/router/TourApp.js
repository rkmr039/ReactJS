/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Product } from "./pages/Product";
import Products from "./pages/Products";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from "./pages/SharedLayout";

const RouterApp = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:productId" element={<Product />}></Route>
          <Route path="login" element={<Login setUser={setUser} />}></Route>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
