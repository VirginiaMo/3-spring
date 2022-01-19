import { Modal } from "react-bootstrap";
import './NuevoAlumno.css';
import {  faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NuevoAlumnoReducer from "./NuevoAlumnoReducer";
import { useReducer } from "react";
import useCandidatos from '../../customHooks/candidatos/useCandidatos';
import { useNavigate } from "react-router-dom";




 const NuevoAlumno = ({show, setShow}) => {
    const handleClose = () => setShow(false);
    const [state, dispatch] = useReducer(NuevoAlumnoReducer.reducer, NuevoAlumnoReducer.initialFormState)

    const { addCandidato } = useCandidatos();
    let navigate = useNavigate();

    const save = (e) => {
        e.preventDefault();
        state.etiquetas = [];
        let nuevoCandidato = addCandidato(state);
        navigate(`/perfil/${nuevoCandidato.id}` );
        console.log(nuevoCandidato)
        console.log(state.nombre)
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
                    
                        <option value="1" defaultValue={[0]}>Buscar</option>
                        <option value="2">España</option>
                        <option value="3">Argentina</option>
                        <option value="4">Suiza</option>
                    </select>
                    <label className="labelCiudad">Ciudad</label>
                    <select className="selectCiudad"
                        value={state.ciudad}
                        onChange={e =>{ e.preventDefault(); dispatch({
                            type:NuevoAlumnoReducer.types.CIUDAD, 
                            value: e.target.value
                            
                        })
                        }}> 

                        <option value="1" defaultValue={[0]} >Elige ciudad</option>
                        <option value="2">Barcelona</option>
                        <option value="3">Madrid</option>
                        <option value="4">Málaga</option>
                    </select>
                    <label className="labelTelefono">Nº de Teléfono</label>
                    <input className="inputTelefono" type="tel" placeholder="Ej: +34 897 67 88 98"
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
                        <option value="2">Presencial</option>
                        <option value="3">Remoto</option>
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
                        <option value="2">Sí</option>
                        <option value="3">No</option>
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
                     onChange={e =>{ e.preventDefault(); dispatch({
                         type:NuevoAlumnoReducer.types.ETIQUETAS, 
                         value: e.target.value
                         
                     })
                      }}> 
                        <option value="1" defaultValue={[0]} >Elige una opción</option>
                        <option value="2">JAVASCRIPT</option>
                        <option value="3">REACT</option>
                        <option value="3">ANGULAR</option>
                        <option value="3">SPRING</option>
                        <option value="3">JAVA</option>
                        </select>
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