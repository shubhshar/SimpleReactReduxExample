const multiplyReducer = (initstate = 1, action) => {
  switch (action.type) {
    case "MULTIPLY":
      return initstate * 3;
    default:
      return initstate;
  }
};
export default multiplyReducer;
