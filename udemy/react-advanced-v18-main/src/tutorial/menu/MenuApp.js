import React from "react";
import "./index.css";
import data from "./data";
import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
console.log(allCategories);

const MenuApp = () => {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <menu>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={items} />
      </section>
    </menu>
  );
};

export default MenuApp;
