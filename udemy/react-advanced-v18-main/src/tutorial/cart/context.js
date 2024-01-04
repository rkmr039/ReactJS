import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: cartItems.length,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", id: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", id: id });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const loading = () => {
    dispatch({ type: "LOADING" });
  };
  const fetchData = async () => {
    loading();
    const response = await fetch(url);
    const items = await response.json();
    dispatch({ type: "LOAD_ITEMS", items });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log("GET_TOATALS dispatched");
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        increase,
        decrease,
        remove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
