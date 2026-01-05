import GalaxyBackground from "./components/InteractiveBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import "./style/main.scss";
export default function App() {
  const scrollTo = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  return (
    <>
      <nav className="nav">
        <button onClick={() => scrollTo("hero")}>Hero</button>
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
      </nav>

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
    </>
  );
}
