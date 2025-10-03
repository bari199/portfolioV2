import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </div>
  );
};

export default App;
