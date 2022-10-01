import React, { useReducer } from "react";
import "./Calculator.css";
import DisplayScreen from "../DisplayScreen";
import DigitButton from "../DigitButton/DigitButton";
import reducer, { initState } from "../../store/reducer";
import OperationButton from "../OperationButton";
import { actions } from "../../store";
import FunctionButton from "../FunctionButton";

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="calculator-grid">
      <DisplayScreen className="span-four" displayData={state} />

      {/* Calculator Numpad */}
      <FunctionButton
        dispatch={() => dispatch(actions.clear())}
        className="span-two"
      >
        AC
      </FunctionButton>
      <FunctionButton dispatch={() => dispatch(actions.deleteDigit())}>
        DEL
      </FunctionButton>
      <OperationButton dispatch={dispatch}>÷</OperationButton>
      <DigitButton dispatch={dispatch}>1</DigitButton>
      <DigitButton dispatch={dispatch}>2</DigitButton>
      <DigitButton dispatch={dispatch}>3</DigitButton>
      <OperationButton dispatch={dispatch}>*</OperationButton>
      <DigitButton dispatch={dispatch}>4</DigitButton>
      <DigitButton dispatch={dispatch}>5</DigitButton>
      <DigitButton dispatch={dispatch}>6</DigitButton>
      <OperationButton dispatch={dispatch}>+</OperationButton>
      <DigitButton dispatch={dispatch}>7</DigitButton>
      <DigitButton dispatch={dispatch}>8</DigitButton>
      <DigitButton dispatch={dispatch}>9</DigitButton>
      <OperationButton dispatch={dispatch}>-</OperationButton>
      <DigitButton dispatch={dispatch}>.</DigitButton>
      <DigitButton dispatch={dispatch}>0</DigitButton>
      <FunctionButton
        dispatch={() => dispatch(actions.evaluate())}
        className="span-two"
      >
        =
      </FunctionButton>
    </div>
  );
};

export default Calculator;
