import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const element = <h1 className='testClass'>Hello world</h1>;

// ReactDOM.render(element, document.getElementById("root"));

// const appElement = <h1 className='testClass'>Second Element</h1>;

// ReactDOM.render(appElement, document.getElementById("app"));
// =========================
// const elements = (
//   <div className='testClass'>
//     <h1 >Hello world</h1>
//     <h1 >Second Element</h1>
//   </div>
// );

// ReactDOM.render(elements, document.getElementById("root"));
// =========================
// const element = React.createElement("h1",null,"Hello World");

// ReactDOM.render(element, document.getElementById("root"));
// =========================

const element = React.createElement("div", {className: "testlass"},
React.createElement("h1",null,"Hello World"),
React.createElement("h1",null,"Second Element"));

ReactDOM.render(element, document.getElementById("root"));



// =========================