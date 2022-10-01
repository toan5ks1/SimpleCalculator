import {
  ADD_DIGIT,
  CHOOSE_OPERATION,
  CLEAR,
  EVALUATE,
  DELETE_DIGIT,
} from "./constants";
import { evaluate } from "../common/util";

const initState = {
  currentResult: "",
  previousResult: "",
  operation: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_DIGIT:
      if (action.payload === "0" && state.currentResult === "0") {
        return state;
      }
      if (action.payload === "." && state.currentResult.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentResult: `${state.currentResult}${action.payload}`,
      };

    case CHOOSE_OPERATION:
      if (!state.currentResult) {
        //wrong syntax
        if (!state.previousResult) {
          return state;
        }
        //change operation
        return {
          ...state,
          operation: action.payload,
        };
      }
      //First calculating
      if (!state.previousResult) {
        return {
          ...state,
          operation: action.payload,
          previousResult: state.currentResult,
          currentResult: "",
        };
      }
      //Reset previousResult after evaluate
      if (state.currentResult && !state.operation) {
        return {
          ...state,
          operation: action.payload,
          previousResult: state.currentResult,
          currentResult: "",
        };
      }
      //continuously calculating
      return {
        ...state,
        previousResult: evaluate(state),
        operation: action.payload,
        currentResult: "",
      };

    case CLEAR:
      return initState;

    case DELETE_DIGIT:
      if (!state.currentResult) {
        return state;
      }
      return {
        ...state,
        currentResult: state.currentResult.slice(0, -1),
      };

    case EVALUATE:
      if (!state.currentResult || !state.operation) {
        return state;
      }

      return {
        ...state,
        previousResult: evaluate(state),
        operation: "",
        currentResult: "",
      };

    default:
      throw new Error("Syntax error");
  }
};

export { initState };
export default reducer;
