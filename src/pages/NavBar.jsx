import { useState } from "react";

const Navbar = () => {
  return(
    <>
    <nav className="flex justify-between">
    <div><img src="../../public/logo.png" className="w-25 h-20 pl-6"  /></div>
      <div className="space-x-19 text-xl font-bold pr-10"><a>ABOUT</a>
      <a>FEATURE</a>
      <a>EVENTS</a>
      <a>LOGIN</a>
     </div>
    </nav>
    </>
  )
};

export default Navbar;
