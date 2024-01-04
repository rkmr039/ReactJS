/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// reducer function

const reducer = (state, action) => {
  if (action.type === "ADD_PEOPLE")
    return {
      ...state,
      people: [...state.people, action.payload],
      isModalOpen: true,
      modalContent: "ADD_PEOPLE",
    };
  if (action.type === "NO_VALUE")
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please input some value",
    };

  if (action.type === "CLOSE_MODAL")
    return {
      ...state,
      isModalOpen: false,
    };

  throw new Error("no matching action type");
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Hello WOrld",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatcher] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (name) {
      const newPeople = { id: new Date().getTime().toString(), [name]: name };
      dispatcher({ type: "ADD_PEOPLE", payload: newPeople });
      setName("");
    } else {
      dispatcher({ type: "NO_VALUE" });
    }
    console.log(state);
  };

  const closeModal = () => {
    dispatcher({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
