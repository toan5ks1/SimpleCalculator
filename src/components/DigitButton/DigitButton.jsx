import React from "react";
import { actions } from "../../store";

const DigitButton = (props) => {
  const { children, className, dispatch } = props;
  return (
    <button
      className={`${className} button-base`}
      onClick={() => dispatch(actions.addDigit(children))}
    >
      {children}
    </button>
  );
};

export default DigitButton;
