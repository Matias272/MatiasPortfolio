import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import projects from "../assets/data/projects.json";
import { IoIosPhonePortrait, IoIosMail, IoIosHome } from "react-icons/io";
import PageButton from "../components/PageButton";
import "./ProjectDetails.scss";
import SeeWebsite from "../components/seeWebsite";
import Techs from "../components/Techs";
export default function ProjectDetails() {
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
        <main className="proDetails">
          <figure>
            <img
              className="proDetails__img"
              src={`/${project.thumbnail_img}`}
              alt={project.title}
            />
            <figcaption className="proDetails__content">
              <h2>{project.title}</h2>
              <Techs m={project.tech} />
              <p>{project.description}</p>
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

      <PageButton className="top right">DK</PageButton>
    </>
  );
}
