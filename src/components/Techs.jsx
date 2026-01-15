export default function Techs({ m, className }) {
  return (
    <ul className={`technologies ${className}`}>
      {m.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
