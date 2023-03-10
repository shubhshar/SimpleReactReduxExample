import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  resetC,
  resetM
} from "./actions/action";

export default function App() {
  const count = useSelector((state) => state.counterReducer);
  const mult = useSelector((state) => state.multiplyReducer);
  const disp = useDispatch();
  const dec = () => {
    disp(decrement());
  };

  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <button onClick={() => disp(increment())}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={() => disp(resetC())}>Reset</button>
      <h2>
        multiply: {mult} x 3= {mult * 3}
      </h2>
      <button onClick={() => disp(multiply())}>*</button>
      <button onClick={() => disp(resetM())}>Reset</button>
    </div>
  );
}
