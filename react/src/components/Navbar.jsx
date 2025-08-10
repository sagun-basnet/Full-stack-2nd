import { Link } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="h-[5rem] bg-primary flex justify-center">
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
    </nav>
  );
};

export default Navbar;
