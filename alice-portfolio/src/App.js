import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { HoverTree} from './components/HoverTree'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react';
function App() {
  return (
    <div>
    <canvas id="canvas"></canvas>
    <div className="App">
  
     <NavBar/>
     <Banner/>
   
    </div>
    </div>
  );
}

export default App;
