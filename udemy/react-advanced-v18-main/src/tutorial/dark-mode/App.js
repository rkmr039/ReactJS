import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";
import "./index.css";
import { logDOM } from "@testing-library/react";

function ThemeApp() {
  const [theme, setTheme] = useState("light-theme");
  const toggle = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else setTheme("light-theme");
    console.log(theme);
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>
          <button className="btn" onClick={toggle}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default ThemeApp;
