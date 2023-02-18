const counterReducer = (initstate = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return initstate + 1;
    case "DECREMENT":
      return initstate - 1;
    case "RESETC":
      return (initstate = 0);
    case "RESETM":
      return (initstate = 0);
    default:
      return initstate;
  }
};

export default counterReducer;
