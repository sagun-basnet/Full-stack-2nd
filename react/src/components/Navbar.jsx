import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="h-[5rem] bg-primary flex justify-between">
      <ul className="flex gap-8 text-lg font-bold">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/service">
          <li>Service</li>
        </Link>
      </ul>
      {currentUser ? <button>logout</button> : <button>signin</button>}
    </nav>
  );
};

export default Navbar;
