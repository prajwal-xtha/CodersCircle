import Navbar from "./pages/NavBar";
import Home from "./components/home";
import About from "./components/about";
import Features from "./components/features";
import Event from "./components/event";
import Footer from "./pages/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Event />
      <Footer />
    </>
  );
}

export default App;
