import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./index.css";

const getListFromLocalStorage = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else return [];
};

function GroceryApp() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getListFromLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please provide some input", "danger");
    } else if (name && isEditing) {
      // deal with edit
      setIsEditing(false);
      const newList = list.filter((item) => item.id !== editId);
      setList([...newList, { id: editId, title: name }]);
      setName("");
      setEditId(null);
      showAlert(true, "item edited", "success");
    } else {
      // show alert
      showAlert(true, "item added", "success");
      // deal with new item
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const clearItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    showAlert(true, "Item Removed", "danger");
  };
  const clearList = () => {
    showAlert(true, "empty list", "danger");
    setList([]);
    setName("");
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, type, msg });
  };

  const editItem = (id, title) => {
    // let item = list.find((item) => item.id === id);
    setName(title);
    setEditId(id);
    setIsEditing(true);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery buds</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e. g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={clearItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear item
          </button>
        </div>
      )}
    </section>
  );
}

export default GroceryApp;
