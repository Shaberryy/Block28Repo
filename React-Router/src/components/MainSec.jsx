import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Red from "./Red";
import Blue from "./Blue";
// import NavBar from "./NavBar";


export default function MainSec() {
  return (
    <>
    <div >
      <div id="main-section" className="main-section">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Red" element={<Red/>} />
          <Route path="/Blue" element={<Blue/>} />
        </Routes>
      </div></div>
    </>
  );
}
