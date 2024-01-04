import React, { useEffect } from "react";

const Alert = ({ show, msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => removeAlert(), 3000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
