import Buttons from "../Buttons";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { AiOutlineFrown } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
      
        <div className="flex">
            <p><AiOutlineFrown /></p>
         Store
        </div>

        <ul className="md:flex hidden uppercase items-center gap-8 font-[poppins]">
          <Link to='/'>Home</Link>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Buttons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
