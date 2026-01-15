import { TbWorld } from "react-icons/tb";
export default function SeeWebsite({ url, className }) {
  return (
    <a
      className={`website ${className}`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <TbWorld size={className === "details" ? 25 : 20} />
      website
    </a>
  );
}
