import GalaxyBackground from "./components/InteractiveBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { AiOutlineHome } from "react-icons/ai";
import "./style/main.scss";
import PageButton from "./components/PageButton";
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
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <GalaxyBackground />
      <PageButton
        onClick={() => scrollTo("hero")}
        children={<AiOutlineHome color="white" size={25} />}
        className={"top left"}
      />
      <PageButton
        onClick={() => scrollTo("hero")}
        children={"DK"}
        className={"top right"}
      />
    </>
  );
}
