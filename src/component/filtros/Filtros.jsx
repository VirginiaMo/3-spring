import './Filtros.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {  useReducer} from 'react';
import FiltroFormReducer from './filtroFormReducer';


const Filtros = () => {
    
const [state, dispatch] = useReducer(FiltroFormReducer.reducer, FiltroFormReducer.initialFormState)


function deleteTecnologia(tecnologia) {
    dispatch({ type: FiltroFormReducer.types.DELETE_TECNOLOGIA, value: tecnologia })
};

   
    return (  
        <div className='containerFiltro'>
            <div>
            <FontAwesomeIcon className='iconTrash' icon={faTrashAlt}  onClick={e => { e.preventDefault(); dispatch({type: FiltroFormReducer.types.RESET}); } }/>
            <h5>Filtros de Búsqueda</h5>
            </div>
            <div className='containerFormulario'>
                <form>
                    <label className='labelTecno'>Tecnologías</label>
                    <select className='selectTecno' 
                    onChange={e =>{ e.preventDefault(); dispatch({
                                                                    type:FiltroFormReducer.types.TECNOLOGIAS, 
                                                                    value: e.target.options[e.target.selectedIndex].text 
                                                                })
                    }}>      
                    <option value="1" defaultValue={[0]}>Elige...</option> 
                    <option value="2">JAVASCRIPT</option> 
                    <option value="3">REACT</option> 
                    <option value="4">ANGULAR</option>
                    <option value="5">SPRING</option>  
                    </select>
                
                    {
                        
                        state.tecnologias.filter(x => x !== "")
                                    .map(t =>  {
                            return(<button onClick={(e) => e.preventDefault()} className='tagHtml'>{t}
                                        <FontAwesomeIcon className='iconFaTimes' icon={faTimes} onClick={(e) => { e.preventDefault(); deleteTecnologia(e.target.value);} } />
                                    </button>)
                        })
                    }
                    
                    <label className='labelPais'>País</label>
                    <select className='selectPais'
                    value={state.pais}
                    onChange={e =>{ e.preventDefault(); dispatch({
                        type:FiltroFormReducer.types.PAIS, 
                        value: e.target.value
                        
                    })
}}>      
                        <option value="1" defaultValue={[0]}>Buscar</option>
                        <option value="2">España</option>
                        <option value="3">Argentina</option>
                        <option value="4">Suiza</option>
                    </select>
                   
                    <label className='labelCiudad'>Ciudad</label>
                    <select className='selectCiudad'
                           value={state.ciudad}
                           onChange={e =>{ e.preventDefault(); dispatch({
                               type:FiltroFormReducer.types.CIUDAD, 
                               value: e.target.value
                               
                           })
                           }}> 
                        <option value="1" defaultValue={[0]} >Elige ciudad</option>
                        <option value="2">Barcelona</option>
                        <option value="3">Madrid</option>
                        <option value="4">Málaga</option>
                    </select>
                    <label className='labelCheckbox1'>Presencial / a distancia</label>
                    <input className='inputCheck1' type="checkbox" 
                    checked={state.presencialidad}
                    onChange={() =>{  dispatch({
                        type:FiltroFormReducer.types.PRESENCIALIDAD
                        
                    })
                    }}/>
                    
                    <label className='labelCheckbox2' >Presencial</label>
                    <input className='inputCheck2' type="checkbox"
                     checked={state.presencialidad}
                     onChange={() =>{  dispatch({
                         type:FiltroFormReducer.types.PRESENCIALIDAD
                         
                     })
                     }}/>
                    <label className='labelCheckbox3' >En remoto</label>
                    <label className='labelcheckbox4'>Posibilidad de traslado</label>
                    <input className='inputCheck1' type="checkbox"
                      checked={state.traslado}
                      onChange={() =>{  dispatch({
                          type:FiltroFormReducer.types.TRASLADO
                          
                      })
                      }}/>
                    <label className='labelCheckbox5' >Sí</label>
                    <input className='inputCheck1' type="checkbox"
                     checked={state.traslado}
                     onChange={() =>{  dispatch({
                         type:FiltroFormReducer.types.TRASLADO
                         
                     })
                     }}/>
                    <label className='labelCheckbox' >No</label>
                    <label className='labelCheckbox6' >Estado</label>
                    <input className='inputCheck1' type="checkbox"
                     checked={state.estado}
                     onChange={() =>{  dispatch({
                         type:FiltroFormReducer.types.ESTADO
                         
                     })
                     }}/>
                    <label className='labelCheckbox2'>Contratado</label>
                    <input className='inputCheck1' type="checkbox"
                     checked={state.estado}
                     onChange={() =>{  dispatch({
                         type:FiltroFormReducer.types.ESTADO
                         
                     })
                     }}/>
                    <label className="labelCheckbox7">Pendiente de Ofertas</label>
                    <input className='inputCheck1' type="checkbox"
                     checked={state.estado}
                     onChange={() =>{  dispatch({
                         type:FiltroFormReducer.types.ESTADO
                         
                     })
                     }}/>
                    <label className='labelCheckbox8'>Preseleccionado</label>
                </form>
            </div>
        </div>
    );
}
 
export default Filtros;