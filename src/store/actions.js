import {
  ADD_DIGIT,
  CHOOSE_OPERATION,
  CLEAR,
  DELETE_DIGIT,
  EVALUATE,
} from "./constants";

export const addDigit = (payload) => ({
  type: ADD_DIGIT,
  payload,
});

export const chooseOperation = (payload) => ({
  type: CHOOSE_OPERATION,
  payload,
});

export const deleteDigit = () => ({
  type: DELETE_DIGIT,
});

export const clear = () => ({
  type: CLEAR,
});

export const evaluate = () => ({
  type: EVALUATE,
});
