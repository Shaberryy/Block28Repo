import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">{/* navigation here */}</div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<h1>home</h1>} />

            <Route path="/Blue" element={<h1>Blue</h1>} />
            <Route path="/Red" element={<h1>Red</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
