import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import GalaxyBackground from "./components/InteractiveBackground";
import Hero from "./pages/Hero";
import About from "./pages/About";
import "./style/main.scss";
export default function App() {
  function AnimatedRoutes() {
    const location = useLocation();
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
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
