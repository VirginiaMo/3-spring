import './Filtros.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const Filtros = () => {
    
const [technologies, setTechnologies] = useState([""]);

function handleSubmit(e){
    e.preventDefault()
   
}

 const addTechnology = (e) => {     
        setTechnologies(technologies.concat(e.target.options[e.target.selectedIndex].text));
        e.target.value = 1;

 }

const closeButton=(e)=>{
    e.preventDefault()
    setTechnologies([])
}

    return (  
        <div className='containerFiltro'>
            <div>
            <FontAwesomeIcon className='iconTrash' icon={faTrashAlt} />
            <h5>Filtros de Búsqueda</h5>
            </div>
            <div className='containerFormulario'>
                <form onSubmit={handleSubmit}>
                    <label className='labelTecno'>Tecnologías</label>
                    <select className='selectTecno' onChange={(e)=> addTechnology(e)}>
                    <option value="1" defaultValue={[0]}>Elige...</option> 
                    <option value="2">JAVASCRIPT</option> 
                    <option value="3">REACT</option>   
                    </select>

                    {
                        technologies.filter(x => x !== "")
                                    .map(t =>  {
                            return(<button className='tagHtml'>{t}<FontAwesomeIcon className='iconFaTimes' icon={faTimes} onClick={closeButton} /></button>)
                        })
                    }
                    
                    <label className='labelPais'>País</label>
                    <select className='selectPais'>
                        <option value="1" defaultValue={[0]}>Buscar</option>
                        <option value="2">España</option>
                        <option value="2">Argentina</option>
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