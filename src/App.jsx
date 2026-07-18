import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import DSA from "./sections/DSA";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import AI from "./sections/AI";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <div className="max-w-10/12 mx-auto">
          <Home />
          <About />
          <Skills />
          <Projects />
          <DSA />
          <AI/>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
