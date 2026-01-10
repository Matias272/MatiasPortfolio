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
        <div className="slider__page" id="hero">
          <Hero />
        </div>
        <div className="slider__page" id="projects">
          <Projects />
        </div>
        <div className="slider__page" id="about">
          <About />
        </div>
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
