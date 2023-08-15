import { Link } from "react-router-dom";
// import Home from "./components/home";
// import Red from "./components/Red";
// import Blue from "./components/Blue";

export default function NavBar() {
  return (
    <><div id>
      <div id="navbar" className="nav">
        <Link to="/" className="butt">
          Home
        </Link>
        <Link to="/Blue" className="butt">
          Blue
        </Link>
        <Link to="/Red" className="butt">
          Red
        </Link>
      </div></div>
    </>
  );
}
