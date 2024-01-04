import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const {
    isModalOpen,
    isSidebarOpen,
    openModal,
    openSidebar,
    closeModal,
    closeSidebar,
  } = useGlobalContext();
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={isSidebarOpen ? closeSidebar : openSidebar}
      >
        <FaBars />
      </button>
      <button className="btn" onClick={isModalOpen ? closeModal : openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
