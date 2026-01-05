import "./Hero.scss";
export default function Hero() {
  const scrollTo = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", inline: "start" });
  };
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Matias Jørgensen</h1>
        <p>Frontend Developer Student</p>
        <ul className="hero__skills">
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
        <ul className="hero__nav">
          <li>
            <button onClick={() => scrollTo("about")}>About</button>
          </li>
        </ul>
      </div>
      <button></button>
    </section>
  );
}
