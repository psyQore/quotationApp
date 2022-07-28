import React from "react";
import "../styles/Spinner.css";

const Spinner = () => {
  return (
    <div className="sk-chase flex justify-center items-center mx-auto mt-20">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  );
};

export default Spinner;
