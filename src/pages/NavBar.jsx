
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { faCake } from "@fortawesome/free-solid-svg-icons/faCake";
import { Link } from "react-router-dom";


const Navbar = () => {
  return(
    <>
    <nav class="sm:fixed top-4 left-1/2 -translate-x-1/2 
            
            bg-black/20 backdrop-blur-xl 
            border border-white/20 
            shadow-lg 
            rounded-2xl 
            px-6 py-3 flex hidden
            sm:flex items-center justify-center 
            z-50 opacity-105 font-bold">

  {/* <h1 class="text-white font-semibold text-lg">
    GlassNav
  </h1> */}

  <ul class="flex gap-24 text-white/90">
  <li>
          <Link to="/" className="hover:text-white transition">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-white transition">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/feature" className="hover:text-white transition">
            FEATURE
          </Link>
        </li>
        <li>
          <Link to="/event" className="hover:text-white transition">
            EVENT
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-white transition">
            LOGIN
          </Link>
        </li>
  </ul>
</nav>
<nav className=" text-white sm:hidden flex w-screen h-15 bg-gray-950  text-center items-center justify-between border-b border-white">
  <h1 className="ml-5"><img src="public/CodersCircleLogo.png" className= "h-10 w-10 rounded-3xl"/></h1>
  <div className="text-2xl mr-4">
    <FontAwesomeIcon icon={faBars} />
  </div>
</nav>
    </>
  )
};

export default Navbar;
