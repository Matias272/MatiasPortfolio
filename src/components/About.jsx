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
            Hello World! I'm Matias Jørgensen, a front-end web development
            student focused on building clean, well-structured, and visually
            consistent user interfaces. I care about writing readable,
            maintainable code and paying close attention to styling and layout
            details to create polished results.
          </p>
          <p>
            I work well in collaborative environments and enjoy contributing to
            team-based projects. Having lived in both Mexico and Denmark, I'm
            comfortable working with different people and perspectives, and I
            adapt quickly to new workflows and challenges.
          </p>
          <p>
            I''m motivated by learning through real projects and continuously
            improving my skills, with a strong focus on clarity, structure, and
            user experience in everything I build.
          </p>
          <button className="about__hero__content__cv-btn">
            Download my CV
          </button>
          <ul className="about__hero__content__contact-ul">
            <li>
              <a href="https://github.com/Matias272" target="blank">
                <img src="../icons/github_dark.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../icons/linkedin.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <IoIosMail size={25} />
              </a>
            </li>
            <li>
              <a href="">
                <IoIosPhonePortrait size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about__skills">
        <h2>Technologies & Skills</h2>
        <p>Technologies and methodologies I normally work with</p>
        <ul className=""></ul>
      </div>
    </div>
  );
}
