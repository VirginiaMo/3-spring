import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Habilidades.css'
import { useReducer } from 'react';
import HabilidadesReducer from './HabilidadesReducer'



const Habilidades = () => {
const [state, dispatch] = useReducer(HabilidadesReducer.reducer, HabilidadesReducer.initialState)
function deleteTecnologia(tecnologia, idiomas) {
    dispatch({ type: HabilidadesReducer.types.DELETE_TAG, value: tecnologia })

};
function deleteIdiomas(idiomas){
    dispatch({ type: HabilidadesReducer.types.DELETE_IDIOMAS, value: idiomas })
};

    return ( 
        <div className="contenido">
            <label>Tecnología</label>
            <select
             onChange={e =>{ e.preventDefault(); dispatch({
                type:HabilidadesReducer.types.TECNOLOGIAS, 
                value: e.target.options[e.target.selectedIndex].text 
            })
}}> 
            
            <option value="1" defaultValue={[1]}>Escribe para buscar...</option>
            <option value="2">HTML&CSS-INIC</option>
            <option value="3">REACT-AVAN.</option>
            <option value="4">ANGULAR-INTER.</option>
            <option value="5">JAVASCRIPT-INIC</option>
            </select>
            {
                        
                        state.tecnologias.filter(x => x !== "")
                                    .map(t =>  {
                                      

                            return(<button onClick={(e) => e.preventDefault()} className='tags'>{t}
                                        <FontAwesomeIcon className='iconFaTimes' icon={faTimes} 
                                        onClick={(e) => { e.preventDefault(); deleteTecnologia(e.target.value);} }
                                        />
                   
                                    </button>)
                                   
                        })
                    }
                    
                 

            <label className='labelIdiomas'>Idiomas</label>
            <select
            onChange={e =>{ e.preventDefault(); dispatch({
                type:HabilidadesReducer.types.IDIOMAS, 
                value: e.target.options[e.target.selectedIndex].text 
            })
        }}> 
            <option value="1" defaultValue={[1]}>Escribe para buscar...</option>
            <option value="2">INGLÉS-INTER.</option>
            <option value="3">ESPAÑOL NATIVO.</option>
            <option value="4">INGLÉS-AVAN.</option>
            <option value="5">INGLÉS-INIC.</option>
            </select>
            {
                        
                        state.idiomas.filter(x => x !== "")
                                    .map(t =>  {
                                      

                            return(<button onClick={(e) => e.preventDefault()} className='buttonIdiomas'>{t}
                                        <FontAwesomeIcon className='iconFaTimes' icon={faTimes} 
                                        onClick={(e) => { e.preventDefault(); deleteIdiomas(e.target.value);} }
                                        />
                   
                                    </button>)
                                   
                        })
                    }
                    
        </div>
     );
}
 
export default Habilidades;