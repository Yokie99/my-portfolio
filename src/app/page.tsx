import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

import React from "react";
import EmailSection from "./components/EmailSection";


export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen text-white">
      <Navbar />
      <About />
      <Projects />
      <div className="container mx-auto px-12 py-4" >

        <EmailSection />
      </div>
      
      



    </main>
  );
}
