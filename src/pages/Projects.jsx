import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { IoIosHome } from "react-icons/io";
import PageButton from "../components/PageButton";
import ProjectCard from "../components/ProjectCard";
import "./Projects.scss";

export default function Projects() {
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
          <h2>Projects</h2>

          <section className="projects__grid">
            {projects === null && <div className="loading">Loading…</div>}
            {projects?.length === 0 && (
              <div className="empty">No projects.</div>
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

      <PageButton className="top right">DK</PageButton>
    </>
  );
}
