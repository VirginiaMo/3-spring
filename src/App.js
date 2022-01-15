import './App.css';

import Candidatos from './component/pages/candidatos/Candidatos';
import Ofertas from '../src/component/pages/ofertas/Ofertas';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Alumno from './component/pages/alumnos/Alumno';
import Clientes from './component/pages/clientes/Clientes.jsx'
import Home from './component/home/Home';








function App() {
  return (
    <div className="App">
    <BrowserRouter>
         
          <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/ofertas" element={<Ofertas />} /> 
                <Route path="/candidatos" element ={<Candidatos />}  />
                <Route path="/alumnos" element={<Alumno />} />
                <Route path="/clientes" element ={<Clientes />}  />  
          </Routes>
    </BrowserRouter>
      
       </div>
  );
}


export default App;
