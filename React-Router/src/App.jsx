import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
        <Link to="/" >Home</Link>
        <Link to="/Blue">Blue</Link>
        <Link to="/Red">Red</Link>
          </div>
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
