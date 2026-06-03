import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Research from "./sections/Research.jsx";
import Projects from "./sections/Projects.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <main className="max-w-5xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
