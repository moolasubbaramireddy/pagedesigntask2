import {useState} from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
// import {FaAngleDown, FaAngleUp} from 'react-icons/fa' ;

const NavLinks = () => {
  const [state, setState] = useState('')
  
  return (
    <>
      {links.map((item, index) => (
        <div key={index}>
          <div  className="px-3 test-left md:cursor-pointer group">
            <h1 className="py-7"
            onClick={()=>{
              state !== item.name ? setState (item.name) : setState ('');
            }}
            >
              <Link to={item.name}> {item.name}</Link>
            <span >
              {/* <p name={`${
                state===item.name ? <FaAngleDown/> : <FaAngleUp/>
              }`}></p> */}
              
            </span>
            </h1>
            {item.Submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:block hover:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10 ">
                    {item.sublinks.map((itemlinks , id) => (
                      <div key={id} >
                        <h1  className="taxt-lg font-semibold">
                          {itemlinks.Head}{" "}
                        </h1>
                        {itemlinks.sublink.map((slink,index1) => (
                          <li key={index1} className="text-sm text-gray-600 my-2.5">
                           <Link to={slink.name}>  {slink.name}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
