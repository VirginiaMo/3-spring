import { Modal } from "react-bootstrap";
import './NuevoAlumno.css';
import {  faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



 const NuevoAlumno = ({show, setShow}) => {
    const handleClose = () => setShow(false);
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
                    <input className="inputText1" type="text" placeholder="Ej: Juan Pérez Lorca"></input>
                    <label className="labelPais">País</label>
                    <select className="selectPais">
                        <option>Elige un país</option>
                    </select>
                    <label className="labelCiudad">Ciudad</label>
                    <select className="selectCiudad">
                        <option>Elige una ciudad</option>
                    </select>
                    <label className="labelTelefono">Nº de Teléfono</label>
                    <input className="inputTelefono" type="tel" placeholder="Ej: +34 897 67 88 98"></input>
                    <label className="labelEmail">Email</label>
                    <input className="inputEmail" type="email" placeholder="Ej: user@gmail.com"></input>
                    <label className="labelPresencial">Presencialidad</label>
                    <select className="selectPresencial">
                        <option>Elige una opción</option>
                    </select>
                    <label className="labelTraslado">Traslado</label>
                    <select className="selectTraslado">
                        <option>Elige una opción</option>
                    </select>
                    <label className="labelLinkedin">Perfil Linkedin</label>
                    <input className="inputLinkedin" type="text"></input>
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
                        <select className="inputEtiqueta">
                            <option>Escribe para buscar</option>
                        </select>
                        <button className="guardar">Guardar</button>
                        <button className="cancelar">Cancelar</button>
                    </div>
                </form>
            </div>
        </Modal.Body>
      
        </Modal>
    </div> );
};
 
export default NuevoAlumno;