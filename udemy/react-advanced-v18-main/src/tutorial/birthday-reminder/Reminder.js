import React, { useState } from "react";
import "./index.css";
import data from "./data";
import List from "./List";

const Reminder = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};

export default Reminder;
