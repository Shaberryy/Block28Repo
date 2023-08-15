import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Red from "./components/Red";
import Blue from "./components/Blue";
import MainSec from "./components/MainSec";
import NavBar from "./components/NavBar";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div id="container">
//         <div id="navbar" className="nav">
//         <Link to="/" className="butt">Home</Link>
//         <Link to="/Blue" className="butt">Blue</Link>
//         <Link to="/Red" className="butt">Red</Link>
//           </div>
//         <div id="main-section">
//           <Routes>
//             <Route path="/" element={<Home/>} />
//             <Route path="/Red" element={<Red/>} />
//             <Route path="/Blue" element={<Blue/>} />
//           </Routes>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

export default function App(){
  return(
    <>
    <div id="">
      <NavBar/>
<MainSec/>

    </div>
    
    </>
  );
}
