export default function ProjectCard({ project }) {
  return (
    <figure className="pro-card">
      <div className="pro-card__img">
        <img src={"src/assets/img/newsify/thumbnail.jpg"} alt="w" />
      </div>
      <figcaption className="pro-card__content">
        <h3>{project.title}</h3>
        <p>{project.short_des}</p>
        <ul className="pro-card__tech">
          {project.tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
