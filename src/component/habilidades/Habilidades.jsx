import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Habilidades.css'
const Habilidades = () => {
    return ( 
        <div className="contenido">
            <label>Tecnología</label>
            <select>
            <option>Escribe para buscar...</option>
            </select>
            <div className='tags'>
                <button>HTML&CSS <FontAwesomeIcon className='iconFaTimes' icon={faTimes} /> INIC</button>
                <button>REACT <FontAwesomeIcon className='iconFaTimes' icon={faTimes} /> AVAN.</button>
                <button>ANGULAR <FontAwesomeIcon className='iconFaTimes' icon={faTimes} /> INTER.</button>
            </div>
            <label className='labelIdiomas'>Idiomas</label>
            <select>
            <option>Escribe para buscar...</option>
            </select>
            <div className='buttonIdiomas'>
                <button>INGLÉS <FontAwesomeIcon className='iconFaTimes' icon={faTimes} /> INTER.</button>
                <button>ESPAÑOL <FontAwesomeIcon className='iconFaTimes' icon={faTimes} /> NATIVO</button>
            </div>
        </div>
     );
}
 
export default Habilidades;