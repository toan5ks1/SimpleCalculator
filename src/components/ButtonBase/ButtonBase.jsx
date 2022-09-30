import React from "react";
import "./ButtonBase.css";

const ButtonBase = (props) => {
  const { children, className } = props;
  return <button className={`${className} button-base`}>{children}</button>;
};

export default ButtonBase;
