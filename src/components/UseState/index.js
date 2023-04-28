import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button
        onClick={() =>
          setToggle(() => {
            if (toggle) {
              setTheme("light");
              return false;
            } else {
              setTheme("dark");
              return true;
            }
          })
        }
      >
        Toggle Theme
      </button>
      {/* {toggle && <h1>On</h1>}
      {!toggle && <h1>Off</h1>} */}
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default UseState;
