import { h } from "preact";
import { useState } from "preact/hooks";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className={"App"}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          A counter: {counter}<br />
          <button onClick={() => { setCounter(counter+1) }}>+1</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
