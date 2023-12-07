import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { HoverTree} from './components/HoverTree'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react';
import { Footer } from './components/Footer';
function App() {
  return (
    <div>
    <canvas id="canvas"></canvas>
    <div className="App">
  
     <NavBar/>
     <Banner/>
     <Skills/>
     <Projects />
     <Footer />
    </div>
    </div>
  );
}

export default App;
