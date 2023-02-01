const multiplyReducer = (initstat = 1, action) => {
  switch (action.type) {
    case "MULTIPLY":
      return initstat * 3;
    case "RESETM":
      return (initstat = 1);
    default:
      return initstat;
  }
};
export default multiplyReducer;
