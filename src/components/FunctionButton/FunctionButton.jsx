import React from "react";

const FunctionButton = (props) => {
  const { children, className, dispatch } = props;
  return (
    <button className={`${className} button-base`} onClick={() => dispatch()}>
      {children}
    </button>
  );
};

export default FunctionButton;
