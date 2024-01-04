import React from "react";
import { useState } from "react";
import data from "./data";
import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    let extraParas = 0;
    if (count < 1) amount = 1;
    if (count > 8) {
      extraParas = count % 8;
      console.log(extraParas);
      let extraTimes = parseInt(count / 8);
      console.log(extraTimes);
      amount = 8;
    }
    setText([...data.slice(0, amount), ...data.slice(0, extraParas)]);
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className="loremForm">
        <lebel htmlForm="amount">Paragraphs:</lebel>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((para, index) => {
          return (
            <p key={index}>
              {index + 1} : {para}
            </p>
          );
        })}
      </article>
    </section>
  );
};

export default App;
