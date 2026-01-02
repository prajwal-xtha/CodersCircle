import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./pages/NavBar";
import Landing from "./components/landing";
import About from "./components/about"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-amber-400">this is cool</h1> */}
      <Navbar />
      <Landing />
      <About />
  
    </>
  );
}

export default App;
