import { useDispatch, useSelector } from "react-redux";
import {
  increament,
  decreament,
  reset,
  increamentByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [increamentAmount, setIncreamentAmount] = useState(0);

  const addvalue = Number(increamentAmount) || 0;

  const resetAll = () => {
    setIncreamentAmount(0);
    dispatch(reset());
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2em" }}>Count: {count}</h1>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{ marginRight: "10px", fontSize: "1.5em" }}
          onClick={() => dispatch(increament())}
        >
          +
        </button>
        <button
          style={{ fontSize: "1.5em" }}
          onClick={() => dispatch(decreament())}
        >
          -
        </button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={increamentAmount}
          onChange={(e) => setIncreamentAmount(e.target.value)}
          style={{
            padding: "5px",
            fontSize: "1em",
            marginRight: "10px",
          }}
        />
        <button
          style={{ fontSize: "1em" }}
          onClick={() => dispatch(increamentByAmount(addvalue))}
        >
          Add amount
        </button>
      </div>
      <div>
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            fontSize: "1.5em",
            borderRadius: "5px",
          }}
          onClick={resetAll}
        >
          Reset All
        </button>
      </div>
    </div>
  );
}

export default App;
