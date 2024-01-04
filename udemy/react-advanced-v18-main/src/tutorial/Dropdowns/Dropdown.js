import React, { useState } from "react";

const Dropdown = ({ title = "Dropdown", items = [], multiSelect = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setIsOpen(!isOpen);

  function handleOnClick(item) {}
  return (
    <div>
      <div
        tabIndex={0}
        role="button"
        onKeyDown={() => toggle(!isOpen)}
        onClick={() => toggle(!isOpen)}
      >
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{isOpen ? "Close" : "Open"}</p>
        </div>
      </div>
      {isOpen && (
        <ul>
          {items.map((item) => {
            <li key={item.is}>
              <button type="button" onClick={handleOnClick(item)}>
                <span>{item.value}</span>
                <span>Selected....</span>
              </button>
            </li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
