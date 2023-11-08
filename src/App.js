import './App.css';
import ParticleBackground from './components/particleBackground/particleBackground';
import Header from "./components/header/header";
import About from "./components/about/about";
import Proyects from "./components/proyects/proyects";
import Contact from './components/contact/contact';
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <ParticleBackground />
      <Header />
      <About />
      <Proyects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;