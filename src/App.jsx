import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Dsa from "./sections/Dsa";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <div className="min-h-screen w-full overflow-x-hidden">
        

        <Navbar />
        <div className="max-w-10/12 mx-auto">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Dsa />
          <Contact />
        </div>
        
      </div>
    </>
  );
};

export default App;
