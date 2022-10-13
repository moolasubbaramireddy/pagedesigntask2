import NavLinks from "./NavLinks";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../redux/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.cart.cartItems);
  const cartQuantity = useSelector((state)=>state.cart.cartTotalQuantity);

  useEffect(() => {
    dispatch(getTotals())
  }, [dispatch  , cartItems])

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
         CART({cartQuantity})
         </button>
         </Link> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
