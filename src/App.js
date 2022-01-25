import './App.css';

import Candidatos from './component/pages/candidatos/Candidatos';
import Ofertas from '../src/component/pages/ofertas/Ofertas';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Alumno from './component/pages/alumnos/Alumno';
import Clientes from './component/pages/clientes/Clientes.jsx'
import Home from './component/home/Home';
import useToken from './component/useToken/useToken';
import Perfil from './component/pages/alumnos/perfil/Perfil';
import { AppContextProvider } from './context/appContext';

function App() {

      const { token, setToken } = useToken();

      if(!token) {
        return < Home setToken={setToken} />
      }
      
  return (
    <div className="App">
          <AppContextProvider>
                  <BrowserRouter>                        
                        <Routes>
                              <Route path="/" element={<Candidatos />} />
                              <Route path="/perfil/:id" element={<Perfil  />} />  
                              <Route path="/ofertas" element={<Ofertas />} /> 
                              <Route path="/candidatos" element ={<Candidatos />}  />
                              <Route path="/alumnos/:id" element={<Alumno />} />
                              <Route path="/clientes" element ={<Clientes />}  />  
                        </Routes>
                  </BrowserRouter>
            </AppContextProvider>
      </div>
  );
}


export default App;
