import Navbar from "./pages/NavBar";
import Home from "./components/home";
import About from "./components/about";
import Features from "./components/features";
import Event from "./components/event";
import Feature from "../../../GSAP/scalartech/coderscircle/src/components/Feature";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      }
      <Home />
      <About />
      <Features />
      <Event />
    </>
  );
}

export default App;
