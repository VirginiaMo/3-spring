import { Modal } from "react-bootstrap";
import './NuevoAlumno.css';
import {  faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NuevoAlumnoReducer from "./NuevoAlumnoReducer";
import { useReducer } from "react";
import useCandidatos from '../../customHooks/candidatos/useCandidatos';
import { useNavigate } from "react-router-dom";
import useTecnologias from "../../customHooks/tecnologias/useTecnologias";




 const NuevoAlumno = ({show, setShow}) => {
    const handleClose = () => setShow(false);
    const [state, dispatch] = useReducer(NuevoAlumnoReducer.reducer, NuevoAlumnoReducer.initialFormState)

    const { tecnologias } = useTecnologias();
    const { addCandidato } = useCandidatos();
    let navigate = useNavigate();

    const save = async (e) => {
        e.preventDefault();
        let IdNuevoCandidato = await addCandidato(state);
        navigate(`/perfil/${IdNuevoCandidato}` );        
    }

    let etiquetasSeleccionadas = null;
    if (state.etiquetas.length > 0) {
        etiquetasSeleccionadas = state.etiquetas.map(etiqueta => { return <span className="btn-primary">{etiqueta}</span> });
    }

    return ( 
    <div className="containerModal">
        <Modal show={show} >
        <Modal.Header closeButton onClick={handleClose}>
            <h6>Nuevo Candidato</h6>
        </Modal.Header>
        <Modal.Body>
            <div className="formPopUp">
                <form>
                    <label className="labelNombre">Nombre y Apellidos</label>
                    <input className="inputText1" type="text" placeholder="Ej: Juan Pérez Lorca"
                     value={state.nombre}
                     onChange={e =>{ e.preventDefault(); dispatch({
                         type:NuevoAlumnoReducer.types.NOMBRE_APELLIDOS, 
                         value: e.target.value
                        
                     }) 
                      }}>  
                    </input>
                    <label className="labelPais">País</label>
                    <select className="selectPais"
                    value={state.pais}
                    onChange={e =>{ e.preventDefault(); dispatch({
                        type:NuevoAlumnoReducer.types.PAIS, 
                        value: e.target.value
                        
                    })
                     }}> 
                    
                        <option value="0" defaultValue={[0]}>Buscar</option>
                        <option value="España">España</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Suiza">Suiza</option>
                    </select>
                    <label className="labelCiudad">Ciudad</label>
                    <select className="selectCiudad"
                        value={state.ciudad}
                        onChange={e =>{ e.preventDefault(); dispatch({
                            type:NuevoAlumnoReducer.types.CIUDAD, 
                            value: e.target.value
                            
                        })
                        }}> 

                        <option value="0" defaultValue={[0]} >Elige ciudad</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Malaga">Málaga</option>
                    </select>
                    <label className="labelTelefono">Nº de Teléfono</label>
                    <input className="inputTelefono" type="text" placeholder="Ej: +34 897 67 88 98"
                    value={state.telefono}
                    onChange={e =>{ e.preventDefault(); dispatch({
                        type:NuevoAlumnoReducer.types.TELEFONO, 
                        value: e.target.value
                    })
                     }}> 
                    </input>
                    <label className="labelEmail">Email</label>
                    <input className="inputEmail" type="email" placeholder="Ej: user@gmail.com"
                    value={state.email}
                    onChange={e =>{ e.preventDefault(); dispatch({
                        type:NuevoAlumnoReducer.types.EMAIL, 
                        value: e.target.value
                        
                    })
                     }}> 
                    </input>
                    <label className="labelPresencial">Presencialidad</label>
                    <select className="selectPresencial"
                         value={state.presencialidad}
                         onChange={e =>{ e.preventDefault(); dispatch({
                             type:NuevoAlumnoReducer.types.PRESENCIALIDAD, 
                             value: e.target.value
                             
                         })
                         }}> 
                        <option value="1" defaultValue={[0]} >Elige una opción</option>
                        <option value="Presencial">Presencial</option>
                        <option value="Remoto">Remoto</option>
                    </select>
                    <label className="labelTraslado">Traslado</label>
                    <select className="selectTraslado"
                         value={state.traslado}
                         onChange={e =>{ e.preventDefault(); dispatch({
                             type:NuevoAlumnoReducer.types.TRASLADO, 
                             value: e.target.value
                             
                         })
                         }}> 
                        
                        <option value="1" defaultValue={[0]} >Elige una opción</option>
                        <option value="Si">Sí</option>
                        <option value="No">No</option>
                    </select>
                    <label className="labelLinkedin">Perfil Linkedin</label>
                    <input className="inputLinkedin" type="text"
                    value={state.linkedin}
                    onChange={e =>{ e.preventDefault(); dispatch({
                        type:NuevoAlumnoReducer.types.LINKEDIN, 
                        value: e.target.value
                        
                    })
                     }}> 
                    </input>
                    <div className="RightSide">
                        <label className="labelFoto">Foto de Perfil</label>
                        <label  htmlFor="file-upload" className="subir">  
                        <FontAwesomeIcon className='iconCloud' icon={faCloudUploadAlt} />Subir imagen</label>
                        <input id="file-upload" className="inputFile" type="file" placeholder='Subir de nuevo'></input> 
                        <p>Archivos soportados: .png .jpg y .jpeg</p>
                        <p className="p1">Tamaño de archivo máximo: 2MB</p>
                        <label className="labelCV">Documento CV</label>
                        <label id="subirboton" htmlFor="file-upload" className="subir">  
                        <FontAwesomeIcon className='iconCloud' icon={faCloudUploadAlt} />Subir Documento PDF</label>
                        <input id="file-upload" className="inputFile" type="file" placeholder='Subir de nuevo'></input>
                        <p className="p3">Archivos soportados: .pdf</p>
                        <p className="p2">Tamaño de archivo máximo: 20MB</p>
                        <label className="labelEtiqueta">Etiquetas</label>
                        <select className="inputEtiqueta"                        
                        value={state.etiquetas}
                        onChange={e =>{ e.preventDefault(); 
                                        
                                        dispatch({
                                            type:NuevoAlumnoReducer.types.ETIQUETAS, 
                                            value: e.target.value                                        
                                        });
                        }}> 
                      
                        <option value="1" defaultValue={[0]} >Elige una opción</option>
                        {
                            tecnologias.map(t => {
                                return (<option value={t}>{t}</option> )
                            })
                        }
                        </select>
                        
                        {etiquetasSeleccionadas}

                        <button className="guardar" onClick={(e) => { save(e);  }}>Guardar</button>
                        <button className="cancelar">Cancelar</button>
                    </div>
                </form>
            </div>
        </Modal.Body>
      
        </Modal>
    </div> );
};
 
export default NuevoAlumno;