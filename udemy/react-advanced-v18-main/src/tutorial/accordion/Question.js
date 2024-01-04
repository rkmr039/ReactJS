import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowAnswer(!showAnswer)}>
          <span>{showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
        </button>
      </header>
      {showAnswer && <p>{info}</p>}
    </article>
  );
};

export default Question;
