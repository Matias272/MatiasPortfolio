import { IoIosPhonePortrait, IoIosMail } from "react-icons/io";
import PageButton from "../components/PageButton";
import "./About.scss";
export default function About() {
  return (
    <div className="about">
      <div className="about__hero">
        <figure className="about__hero__left">
          <div className="about__hero__left__img">
            <img src="../img/me.jpeg" alt="" />
          </div>
          <figcaption>
            <ul className="about__hero__left__ul">
              <li>
                <PageButton
                  className={"qualities"}
                  children={"Team-Oriented"}
                />
              </li>
              <li>
                <PageButton className={"qualities"} children={"UI & Design"} />
              </li>
              <li>
                <PageButton className={"qualities"} children={"Clean Code"} />
              </li>
            </ul>
          </figcaption>
        </figure>
        <div className="about__hero__content">
          <h2>About Me</h2>
          <p>
            Hello World! I'm{" "}
            <strong className="strong-text">Matias Jørgensen</strong>, a
            front-end web development student focused on building clean,
            well-structured, and visually consistent user website or apps. I
            care about writing readable, maintainable code and paying close
            attention to styling and layout details to create very very very
            good results.
          </p>
          <p>
            I work well in collaborative environments and enjoy contributing to
            team-based projects. Having lived in both Mexico and Denmark, I'm
            comfortable working with different people and perspectives, and I
            adapt quickly to new workflows and challenges.
          </p>
          <p>
            I'm motivated by learning through real projects and continuously
            improving my skills, with a strong focus on clarity, structure, and
            user experience in everything I build.
          </p>
          <a
            href="/files/CV-matias.pdf"
            download
            className="about__hero__content__cv-btn"
          >
            Download my CV
          </a>

          <ul className="about__hero__content__contact-ul">
            <li>
              <a href="https://github.com/Matias272" target="blank">
                <img src="../icons/github_dark.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/matias-j%C3%B8rgensen-29a703327/"
                target="blank"
              >
                <img src="../icons/linkedin.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="mailto:matjorrub@gmail.com" target="blank">
                <IoIosMail size={30} />
              </a>
            </li>
            <li>
              <a href="tel:+4591117821">
                <IoIosPhonePortrait size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about__skills">
        <div className="about__skills__con">
          <p>Personal Skills</p>
          <ul className="about__skills__ul">
            <li>Handsome</li>
            <li>185 cm</li>
            <li>x3 Unreal in Fortnite</li>
            <li>Rich</li>
            <li>Mexican</li>
          </ul>
        </div>
        <div className="about__skills__con">
          <p>Technologies</p>
          <ul className="about__skills__ul">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>SCSS</li>
            <li>VITEST</li>
            <li>ZOD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
