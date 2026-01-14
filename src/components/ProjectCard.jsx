import { Link, useNavigate } from "react-router";
import SeeWebsite from "./seeWebsite";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  if (!project) return null;

  const handleCardClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <figure className="pro-card" onClick={handleCardClick}>
      <div className="pro-card__img">
        <img
          src={project.thumbnail_img}
          alt={project.title || "Project image"}
          onError={(e) => {
            e.target.src = "/fallback.jpg";
          }}
        />
      </div>

      <figcaption className="pro-card__content">
        <div>
          <h3>{project.title}</h3>
          <p>{project.short_des}</p>
        </div>

        <div onClick={(e) => e.stopPropagation()}>
          <SeeWebsite url={project.web_url} />

          <ul className="technologies">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </figcaption>
    </figure>
  );
}
