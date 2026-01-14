import { TbWorld } from "react-icons/tb";
export default function SeeWebsite({ url }) {
  return (
    <a className="website" href={url} target="_blank" rel="noreferrer">
      <TbWorld size={20} />
      website
    </a>
  );
}
