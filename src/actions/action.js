const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

const multiply = () => {
  return {
    type: "MULTIPLY"
  };
};

const resetC = () => {
  return {
    type: "RESETC"
  };
};

const resetM = () => {
  return {
    type: "RESETM"
  };
};
export { increment, decrement, multiply, resetC, resetM };
