import { useState } from "react";

import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Random Generator</h1>
      <Dropdown />
    </div>
  );
}

export default App;
