import './Filtros.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Filtros = () => {
    return (  
        <div className='containerFiltro'>
            <div>
            <FontAwesomeIcon className='iconTrash' icon={faTrashAlt} />
            <h5>Filtros de Búsqueda</h5>
            </div>
            <div className='containerFormulario'>
                <form>
                    <label className='labelTecno'>Tecnologías</label>
                    <select className='selectTecno'>
                        <option>Escribe para buscar...</option>
                    </select>
                    <button className='tagHtml'>HTML&CSS<FontAwesomeIcon className='iconFaTimes' icon={faTimes} /></button>
                    <button className='tagReact'>REACT <FontAwesomeIcon className='iconFaTimes' icon={faTimes} /></button>
                    <button className='tagAngular'>ANGULAR <FontAwesomeIcon className='iconFaTimes' icon={faTimes} /></button>
                    <label className='labelPais'>País</label>
                    <select className='selectPais'>
                        <option>España</option>
                    </select>
                    <label className='labelCiudad'>Ciudad</label>
                    <select className='selectCiudad'>
                        <option>Barcelona</option>
                    </select>
                    <label className='labelCheckbox1'>Presencial / a distancia</label>
                    <input className='inputCheck1' type="checkbox" />
                    <label className='labelCheckbox2' >Presencial</label>
                    <input className='inputCheck2' type="checkbox"></input>
                    <label className='labelCheckbox3' >En remoto</label>
                    <label className='labelcheckbox4'>Posibilidad de traslado</label>
                    <input className='inputCheck1' type="checkbox"></input>
                    <label className='labelCheckbox5' >Sí</label>
                    <input className='inputCheck1' type="checkbox"></input>
                    <label className='labelCheckbox' >No</label>
                    <label className='labelCheckbox6' >Estado</label>
                    <input className='inputCheck1' type="checkbox"></input>
                    <label className='labelCheckbox2'>Contratado</label>
                    <input className='inputCheck1' type="checkbox"></input>
                    <label className="labelCheckbox7">Pendiente de Ofertas</label>
                    <input className='inputCheck1' type="checkbox"></input>
                    <label className='labelCheckbox8'>Preseleccionado</label>
                </form>
            </div>
        </div>
    );
}
 
export default Filtros;