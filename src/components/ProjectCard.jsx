import { Link, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import SeeWebsite from "./SeeWebsite";
import Techs from "./Techs";

export default function ProjectCard({ project }) {
  const { t } = useTranslation();
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
          <h3>{t(project.title)}</h3>
          <p>{t(project.short_des)}</p>
        </div>

        <div onClick={(e) => e.stopPropagation()}>
          <SeeWebsite url={project.web_url} />

          {<Techs m={project.tech} />}
        </div>
      </figcaption>
    </figure>
  );
}
