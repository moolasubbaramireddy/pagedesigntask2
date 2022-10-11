import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
      
       
        <Link to='/login'><button className='font-medium px-4 py-1 text-emerald-500 rounded-md border-solid border-2 border-emerald-500'>
         LOG IN
       </button></Link>

        <ul className="md:flex hidden uppercase items-center gap-8 font-[poppins]">
          <Link to='/'>Home</Link>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          
        <Link to='/cart' ><button className='px-4 py-1 ml-2 text-white bg-emerald-500 font-medium  rounded-md border-solid border-2 border-emerald-500'>
         CART(0)
         </button>
         </Link> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
