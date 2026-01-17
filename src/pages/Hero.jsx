import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import { motion } from "motion/react";
import PageButton from "../components/PageButton";
import "./Hero.scss";
export default function Hero() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "da" ? "en" : "da");
  };
  return (
    <>
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        exit={{ clipPath: "inset(0 100% 0 0)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <main className="hero page-wrapper">
          <section className="hero__content">
            <h1>Matias Jørgensen</h1>
            <p>{t("frontendStudent")}</p>
            <ul className="hero__content__skills">
              <li>
                <img src="../icons/html5.svg" alt="html5" />
              </li>
              <li>
                <img src="../icons/css_old.svg" alt="css3" />
              </li>
              <li>
                <img src="../icons/javascript.svg" alt="javascript" />
              </li>
              <li>
                <img src="../icons/react_dark.svg" alt="html" />
              </li>
              <li>
                <img src="../icons/sass.svg" alt="sass" />
              </li>
              <li>
                <img src="../icons/nodejs.svg" alt="nodejs" />
              </li>
              <li>
                <img src="../icons/exp.svg" alt="express.js" />
              </li>
              <li>
                <img src="../icons/vitest.svg" alt="vitest" />
              </li>
            </ul>
            <ul className="hero__content__nav">
              <li>
                <Link to={"/projects"}>
                  <PageButton children={t("projects")} />
                </Link>
              </li>
              <li>
                <Link to={"/about"}>
                  <PageButton children={t("aboutMe")} />
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </motion.div>
      <PageButton
        onClick={toggleLanguage}
        className={"top right"}
        children={t("button")}
      />
    </>
  );
}
