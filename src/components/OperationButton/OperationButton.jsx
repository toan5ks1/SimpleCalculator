import React from "react";
import { actions } from "../../store";

const OperationButton = (props) => {
  const { children, className, dispatch } = props;
  return (
    <button
      className={`${className} button-base`}
      onClick={() => dispatch(actions.chooseOperation(children))}
    >
      {children}
    </button>
  );
};

export default OperationButton;
