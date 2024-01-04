import React, { useState } from "react";
import "./index.css";
import Values from "values.js";
import SingleColor from "./SingleColor";

const App = () => {
  const [color, setColor] = useState("#f15025");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((item, index) => {
          return <SingleColor key={index} {...item} index={index} />;
        })}
      </section>
    </>
  );
};

export default App;
