import Home from "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Skills from "./Components/Skills/Skills.jsx";
import Project from "./Components/Projects/Project.jsx";
import Achievements from "./Components/Achievements/Achievements.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./Components/About/About.jsx";

// import { Routes, Route } from "react-router-dom";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  });
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
