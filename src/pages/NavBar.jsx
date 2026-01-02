import { useState } from "react";

const Navbar = () => {
  return(
    <>
    <nav class="fixed top-4 left-1/2 -translate-x-1/2 
            w-[90%] max-w-xl 
            bg-black/20 backdrop-blur-xl 
            border border-white/20 
            shadow-lg 
            rounded-2xl 
            px-6 py-3 
            flex items-center justify-center 
            z-50 opacity-105 font-bold">

  {/* <h1 class="text-white font-semibold text-lg">
    GlassNav
  </h1> */}

  <ul class="flex gap-24 text-white/90">
    <li class="hover:text-white transition">ABOUT</li>
    <li class="hover:text-white transition">HOME</li>
    <li class="hover:text-white transition">CONTACT US</li>
  </ul>
</nav>

    </>
  )
};

export default Navbar;
