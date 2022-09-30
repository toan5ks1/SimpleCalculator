import React from "react";
import "./Calculator.css";
import DisplayScreen from "../DisplayScreen";
import ButtonBase from "../ButtonBase/ButtonBase";

const Calculator = () => {
  return (
    <div className="calculator__container">
      <div className="calculator-grid">
        <DisplayScreen className="span-four" />
        {/* Calculator Numpad */}
        <ButtonBase className="span-two">AC</ButtonBase>
        <ButtonBase>DEL</ButtonBase>
        <ButtonBase>÷</ButtonBase>
        <ButtonBase>1</ButtonBase>
        <ButtonBase>2</ButtonBase>
        <ButtonBase>3</ButtonBase>
        <ButtonBase>*</ButtonBase>
        <ButtonBase>4</ButtonBase>
        <ButtonBase>5</ButtonBase>
        <ButtonBase>6</ButtonBase>
        <ButtonBase>+</ButtonBase>
        <ButtonBase>7</ButtonBase>
        <ButtonBase>8</ButtonBase>
        <ButtonBase>9</ButtonBase>
        <ButtonBase>-</ButtonBase>
        <ButtonBase>.</ButtonBase>
        <ButtonBase>0</ButtonBase>
        <ButtonBase className="span-two">=</ButtonBase>
      </div>
    </div>
  );
};

export default Calculator;
