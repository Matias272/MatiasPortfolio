import { motion } from "motion/react";
import { Link } from "react-router";
import { IoIosPhonePortrait, IoIosMail, IoIosHome } from "react-icons/io";
import { FaCode, FaPeopleGroup, FaPenRuler, FaDownload } from "react-icons/fa6";
import PageButton from "../components/PageButton";
import "./Projects.scss";

export default function Projects() {
  return (
    <>
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        exit={{ clipPath: "inset(0 100% 0 0)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <main className="projects">
          <h2>Projects</h2>
        </main>
      </motion.div>
      <Link to={"/"}>
        <PageButton className={"top left"} children={<IoIosHome size={22} />} />
      </Link>
      <PageButton className={"top right"} children={"DK"} />
    </>
  );
}
