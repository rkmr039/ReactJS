import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [item, setItem] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const openSubmenu = (text, coordinates) => {
    const item = sublinks.find((link) => link.page === text);
    console.log(item);
    setItem(item);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
        location,
        item,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useGlobalContext };
