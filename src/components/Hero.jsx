import PageButton from "./PageButton";
import "./Hero.scss";
export default function Hero() {
  console.log(  new Date(-[])
);
  
  const scrollTo = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", inline: "start" });
  };
  return (
    <div className="hero">
      <h1>Matias Jørgensen</h1>
      <p>Frontend Developer Student</p>
      <ul className="hero__content__skills">
        <li>
          <img src="../icons/html5.svg" alt="html5" />
        </li>
        <li>
          <img src="../icons/css_old.svg" alt="css3" />
        </li>
        <li>
          <img src="../icons/javascript.svg" alt="javascript" />
        </li>
        <li>
          <img src="../icons/react_dark.svg" alt="html" />
        </li>
        <li>
          <img src="../icons/sass.svg" alt="sass" />
        </li>
        <li>
          <img src="../icons/nodejs.svg" alt="nodejs" />
        </li>
        <li>
          <img src="../icons/exp.svg" alt="express.js" />
        </li>
        <li>
          <img src="../icons/vitest.svg" alt="vitest" />
        </li>
      </ul>
      <ul className="hero__content__nav">
        <li>
          <PageButton
            onClick={() => scrollTo("projects")}
            children={"Projects"}
          />
        </li>
        <li>
          <PageButton onClick={() => scrollTo("about")} children={"About Me"} />
        </li>
      </ul>
    </div>
  );
}
