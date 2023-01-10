import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import reactLogo from "./assets/react.svg";
import "./App.css";
import { increment } from "./features/counterSlice";

const App = () => {
  const count = useSelector((state) => {
    console.log("state inside useSelecto hook", state);
    return state.counter.count;
  });
  // 2-nd way using destructurin
  // const { count } = useSelector((state) => state.counter);
  const dispath = useDispatch();

  return (
    <div className="App">
      <div>
        <h2></h2>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispath(increment())}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
