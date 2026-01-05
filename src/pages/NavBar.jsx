import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="sm:fixed top-4 left-1/2 -translate-x-1/2
        bg-black/20 backdrop-blur-xl
        border border-white/20
        shadow-lg
        rounded-2xl
        px-6 py-3 hidden sm:flex items-center justify-center
        z-50 font-bold"
      >
        <ul className="flex gap-24 text-white/90">
          <li><a href="#home" className="hover:text-white">HOME</a></li>
          <li><a href="#about" className="hover:text-white">ABOUT</a></li>
          <li><a href="#feature" className="hover:text-white">FEATURE</a></li>
          <li><a href="#event" className="hover:text-white">EVENT</a></li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sm:hidden flex w-screen h-14 bg-gray-950 items-center justify-between border-b border-white px-4">
        <img
          src="/CodersCircleLogo.png"
          alt="logo"
          className="h-10 w-10 rounded-3xl"
        />
        <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer text-white" />
      </nav>
      
    </>
  );
};

export default Navbar;
