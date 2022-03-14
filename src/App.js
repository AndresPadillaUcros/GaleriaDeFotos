import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Logo1 from './components/Logo1';
import Logo2 from './components/Logo2';
import Logo3 from './components/Logo3';
import Navegacion from './components/Navegacion';


function App() {
  return (
   
    <Router>
      <div className="container"> 
        <h1 className="text-center mt-3 mb-3">Galeria</h1>
      </div>
      <Routes>
        <Route path="/Logo1" element={<Logo1/>} />
        <Route path="/Logo2" element={<Logo2/>} />
        <Route path="/Logo3" element={<Logo3/>} />        
      </Routes>
      <Navegacion />
    </Router>
  );
}

export default App;
