import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";

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
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/Red" element={Red()} />
            <Route path="/Blue" element={Blue()} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
