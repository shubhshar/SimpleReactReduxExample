const counterReducer = (initstate = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return initstate + 1;
    case "DECREMENT":
      return initstate - 1;
    default:
      return initstate;
  }
};

export default counterReducer;
