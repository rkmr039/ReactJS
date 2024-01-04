import React, { useState } from "react";
import { useEffect } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState(window.innerWidth);
  const handleClick = () => {
    console.log("size changed");
    setTitle(window.innerWidth);
    //window.removeEventListener("resize", handleClick);
  };

  //window.addEventListener("resize", handleClick);

  useEffect(() => {
    window.addEventListener("resize", handleClick);
    return () => {
      window.removeEventListener("resize", handleClick);
    };
  });
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

export default ErrorExample;
