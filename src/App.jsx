import GalaxyBackground from "./components/InteractiveBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { AiOutlineHome } from "react-icons/ai";
import "./style/main.scss";
export default function App() {
  const scrollTo = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", inline: "start" });
  };
  return (
    <>
      <main className="slider">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <GalaxyBackground />
      <button onClick={() => scrollTo("hero")} className="home-button">
        <AiOutlineHome />
      </button>
    </>
  );
}
