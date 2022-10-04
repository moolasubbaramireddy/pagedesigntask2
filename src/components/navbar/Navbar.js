import Buttons from "../Buttons"
import NavLinks from "./NavLinks"

const Navbar = () => {
  return (
    <nav className='bg-white'>
        <div className='flex items-center font-medium justify-around'>
            <div className="">
                <h1>Store</h1>
            </div>

            <ul className="md:flex hidden uppercase items-center gap-8 font-[poppins]">
                <li>
                    Home
                </li>
                <NavLinks />
            </ul>
            <div className="md:block hidden">
                <Buttons />
            </div>
            {/* mobile drive */}
            <ul className={`
            md:hidden bg-white absolute w-full h-full buttom-0 py-24 pl-4
            `}>
                <li>Home</li>
                <NavLinks />
                <div className="py-5">
                    <Buttons />
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar