import React from "react";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="center">Sending your message...</p>
    </div>
  );
};

export default Spinner;
