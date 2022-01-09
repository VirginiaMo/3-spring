import './searchPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import NuevoAlumno from '../pages/alumnos/NuevoAlumno';



const SearchPage = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return ( 
        <div className='containerSelect'>
            <FontAwesomeIcon  className='searchIcon' icon={faSearch}  />
            <select className='select'>
                <option>Buscar por Candidatos por Nombre, por DNI, etc...</option>
            </select>
            <div className='iconoNombre'>
                <p className='insideIcono'>NA</p>
                <p className='Nombre'>Nombre</p>
            </div>
            <button className='añadirAlumnos'onClick={handleShow}><FontAwesomeIcon  className='plusIcon' icon={faPlus}  /> Añadir alumnos</button>
            <NuevoAlumno show ={show} setShow={setShow} />
        </div>
     );
}
 
export default SearchPage;