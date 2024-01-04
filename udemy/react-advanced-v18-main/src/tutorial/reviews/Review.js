import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = (i) => {
    if (i === 0) i = people.length - 1;
    setIndex(i - 1);
  };
  const nextPerson = (i) => {
    if (i === people.length - 1) i = -1;
    setIndex(i + 1);
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) randomPerson();
    else setIndex(randomNumber);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => prevPerson(index)}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => nextPerson(index)}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => randomPerson()}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
