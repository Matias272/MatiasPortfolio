import { motion } from "motion/react";
import { Link } from "react-router";
import { IoIosPhonePortrait, IoIosMail, IoIosHome } from "react-icons/io";
import { FaCode, FaPeopleGroup, FaPenRuler, FaDownload } from "react-icons/fa6";
import PageButton from "../components/PageButton";
import "./About.scss";
import Techs from "../components/Techs";
const qualities = [
  { name: "Team-Oriented", icon: <FaPeopleGroup /> },
  { name: "UI & Design", icon: <FaPenRuler /> },
  { name: "Clean Code", icon: <FaCode /> },
];
const contact = [
  {
    link: "https://github.com/Matias272",
    icon: <img src="../icons/github_dark.svg" alt="" />,
    title: "Matias272",
    id: 1,
  },
  {
    link: "https://www.linkedin.com/in/matias-j%C3%B8rgensen-29a703327/",
    icon: <img src="../icons/linkedin.svg" alt="" />,
    title: "Matias Jørgensen",
    id: 2,
  },
  {
    link: "mailto:matjorrub@gmail.com",
    icon: <IoIosMail size={30} />,
    title: "matjorrub@gmail.com",
    id: 3,
  },
  {
    link: "tel:+4591117821",
    icon: <IoIosPhonePortrait size={30} />,
    title: "91 11 78 21",
    id: 4,
  },
];
const skills = {
  tech: ["HTML", "CSS, JAVASCRIPT", "REACT", "SCSS", "VITEST", "ZOD"],
  personalSkills: [
    "User focused",
    "Adaptable",
    "Organized",
    "Team Player",
    "Curious",
  ],
};

export default function About() {
  return (
    <>
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        exit={{ clipPath: "inset(0 100% 0 0)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ width: "100%", overflow: "hidden" }}
      >
        <main className="about">
          <h2 className="about-h2-phone">About Me</h2>

          <section className="about__hero">
            <figure className="about__hero__left">
              <div className="about__hero__left__img">
                <img src="../img/me.jpeg" alt="" />
              </div>
              <figcaption>
                <ul className="about__hero__left__ul">
                  {qualities.map((quality) => (
                    <li key={quality.name}>
                      <PageButton hover={false} className={"qualities"}>
                        {quality.icon}
                        {quality.name}
                      </PageButton>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
            <div className="about__hero__content">
              <h2 className="about-h2-desktop">About Me</h2>
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
                I work well in collaborative environments and enjoy contributing
                to team-based projects. Having lived in both Mexico and Denmark,
                I'm comfortable working with different people and perspectives,
                and I adapt quickly to new workflows and challenges.
              </p>
              <p>
                I'm motivated by learning through real projects and continuously
                improving my skills, with a strong focus on clarity, structure,
                and user experience in everything I build.
              </p>
              <a href="/files/CV-matias.pdf" download>
                <PageButton className={"CV"}>
                  <FaDownload />
                  Download my CV
                </PageButton>
              </a>

              <ul className="about__hero__content__contact-ul">
                {contact.map((info) => (
                  <li key={info.id}>
                    <a title={info.title} href={info.link} target="blank">
                      <PageButton className={"contact"} children={info.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="about__skills">
            <h3>Skills & Expertise</h3>
            <div className="about__skills__wrap">
              <div className="about__skills__wrap__con">
                <p>Personal Skills</p>
                {<Techs m={skills.personalSkills} className={"ab"} />}
              </div>
              <div className="about__skills__wrap__con">
                <p>Technologies</p>
                {<Techs m={skills.tech} className={"ab"} />}
              </div>
            </div>
          </section>
        </main>
      </motion.div>
      <Link to={"/"}>
        <PageButton className={"top left"} children={<IoIosHome size={22} />} />
      </Link>
      <PageButton className={"top right"} children={"DK"} />
    </>
  );
}
