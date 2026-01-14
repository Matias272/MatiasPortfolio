import { TbWorld } from "react-icons/tb";
export default function ProjectCard({ project }) {
  return (
    <figure className="pro-card">
      <div className="pro-card__img">
        <img src={project.thumbnail_img} alt="w" />
      </div>
      <figcaption className="pro-card__content">
        <div>
          <h3>{project.title}</h3>
          <p>{project.short_des}</p>
        </div>
        <div>
          <a href={project.web_url} target="_blank">
            <TbWorld size={20} />
            website
          </a>
          <ul className="technologies">
            {project.tech.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </figcaption>
    </figure>
  );
}
