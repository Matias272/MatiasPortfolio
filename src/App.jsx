import GalaxyBackground from "./components/InteractiveBackground";
import Hero from "./components/Hero";
import "./style/main.scss";
function App() {
  return (
    <div className="page__wrapper">
      <Hero />
      <GalaxyBackground />
    </div>
  );
}

export default App;
