import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="flex flex-col bg-gray-800 min-h-screen text-white">
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
    
      
    </main>
  );
}
