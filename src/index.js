import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { createStore } from "redux";
import allReducersCombined from "./reducers/combineRed";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(
  allReducersCombined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
