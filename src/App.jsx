import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
