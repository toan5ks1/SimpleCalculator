export const evaluate = ({ previousResult, operation, currentResult }) => {
  const prev = parseFloat(previousResult);
  const current = parseFloat(currentResult);
  let result = "";
  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "÷":
      result = prev / current;
      break;
    default:
  }
  return result.toString();
};
