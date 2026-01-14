import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import GalaxyBackground from "./components/InteractiveBackground";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import "./style/main.scss";
export default function App() {
  function AnimatedRoutes() {
    const location = useLocation();
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </AnimatePresence>
    );
  }
  return (
    <>
      <div className="pages-wrapper">
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
      <GalaxyBackground />
    </>
  );
}
