import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { IoIosHome } from "react-icons/io";
import { useTranslation } from "react-i18next";
import PageButton from "../components/PageButton";
import ProjectCard from "../components/ProjectCard";
import "./Projects.scss";

export default function Projects() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "da" ? "en" : "da");
  };
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    import("../assets/data/projects.json")
      .then((m) => setProjects(m.default ?? []))
      .catch(() => setProjects([]));
  }, []);

  return (
    <>
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        exit={{ clipPath: "inset(0 100% 0 0)" }}
        transition={{ duration: 0.3 }}
        style={{ width: "100%", overflow: "hidden" }}
      >
        <main className="projects">
          <h2>{t("projectsTitle")}</h2>

          <section className="projects__grid">
            {projects === null && <div className="loading">{t("loading")}</div>}
            {projects?.length === 0 && (
              <div className="empty">{t("noProjects")}</div>
            )}
            {projects?.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </section>
        </main>
      </motion.div>

      <Link to="/">
        <PageButton className="top left">
          <IoIosHome size={22} />
        </PageButton>
      </Link>

      <PageButton
        children={t("button")}
        onClick={toggleLanguage}
        className="top right"
      ></PageButton>
    </>
  );
}
