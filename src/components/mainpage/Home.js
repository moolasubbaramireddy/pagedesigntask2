import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import './Home.css';


const Home = () => {
  
  
  return (
    <div>
      <Navbar />
      <div className="bg ">
          <div className="body">
            <h1 className="uppercase text-2xl">welcome to my world </h1> 
            <Link to='/products'> <button className="uppercase border border-lime-400 p-1 m-2  rounded-full  font-semibold">get start</button></Link>
          </div>
          
      </div>
    </div>
  );
};

export default Home;
