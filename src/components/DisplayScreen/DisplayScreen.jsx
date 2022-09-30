import React from "react";
import "./DisplayScreen.css";

const DisplayScreen = (props) => {
  const { className } = props;
  return (
    <div className={`${className} displayscreen__container`}>
      <div className="previous-result">123 *</div>
      <div className="current-result">123</div>
    </div>
  );
};

export default DisplayScreen;
