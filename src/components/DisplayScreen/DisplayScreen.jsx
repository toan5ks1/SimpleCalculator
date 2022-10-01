import React from "react";
import "./DisplayScreen.css";

const DisplayScreen = (props) => {
  const { className, displayData } = props;
  const { currentResult, previousResult, operation } = displayData;

  return (
    <div className={`${className} displayscreen-container`}>
      <div className="previous-result">
        {previousResult}
        {operation}
      </div>
      <div className="current-result">{currentResult}</div>
    </div>
  );
};

export default DisplayScreen;
