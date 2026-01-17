import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { useTranslation } from "react-i18next";
import projects from "../assets/data/projects.json";
import { IoIosHome, IoIosArrowBack } from "react-icons/io";
import PageButton from "../components/PageButton";
import "./ProjectDetails.scss";
import SeeWebsite from "../components/SeeWebsite";
import Techs from "../components/Techs";
export default function ProjectDetails() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "da" ? "en" : "da");
  };
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="project-details">
        <p>Project not found.</p>
        <Link to="/projects">Back to projects</Link>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        exit={{ clipPath: "inset(0 100% 0 0)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ width: "100%", overflow: "hidden" }}
      >
        <div className="proDetails__top-link">
          <Link to={"/projects"}>
            <IoIosArrowBack
              className="proDetails__top-link__icon"
              color="white"
              size={35}
            />{" "}
            {t("backToProjects")}
          </Link>
        </div>
        <main className="proDetails">
          <figure>
            <img
              className="proDetails__img"
              src={`${project.thumbnail_img}`}
              alt={project.title}
            />
            <figcaption className="proDetails__content">
              <h2>{t(project.title)}</h2>
              <Techs m={project.tech} />
              <p>
                {t(project.description)}
                {project.figma && (
                  <a
                    className="proDetails__design"
                    href={project.figma}
                    target="blank"
                  >
                    {t("seeDesign")}
                  </a>
                )}
              </p>

              <SeeWebsite className={"details"} url={project.web_url} />
            </figcaption>
          </figure>
          <ul className="proDetails__gallery">
            {project.images.map((img) => (
              <li key={img}>
                <img src={`/${img}`} />
              </li>
            ))}
          </ul>
        </main>
      </motion.div>
      <Link to="/">
        <PageButton className="top left">
          <IoIosHome size={22} />
        </PageButton>
      </Link>

      <PageButton
        onClick={toggleLanguage}
        children={t("button")}
        className="top right"
      />
    </>
  );
}
