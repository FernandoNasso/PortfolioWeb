import './App.css';
import ParticleBackground from './components/particleBackground/particleBackground';
import Header from "./components/header/header";
import About from "./components/about/about";
import Proyects from "./components/proyects/proyects";
function App() {
  return (
    <div>
      <ParticleBackground />
      <Header />
      <About />
      <Proyects />
    </div>
  );
}

export default App;