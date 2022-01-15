import React,{useState} from 'react'
import { faChevronLeft, faCloudUploadAlt, faDotCircle, faMapMarkerAlt, faSearch, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Imagen from "../../image/Image";
import NavTabs from "../../tabs/Tabs";
import './Alumno.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';



const Alumno = () => {

    const [pdfFileError, setPdfFileError]=useState('');
    const [pdfFileEvent, setPdfFileEvent]=useState('');

    let navigate = useNavigate();
    function returnTabla() {
        navigate('/candidatos', {replace: true});
    }

    return ( 

            <div><Navbar />
            <div className='containerSelect'>
           
            <FontAwesomeIcon  className='searchIcon' icon={faSearch}  />
            <select className='select'>
                <option>Buscar por Candidatos por Nombre, por DNI, etc...</option>
            </select>
          
            <div className='iconoNombre'>
                <p className='insideIcono'>NA</p>
                <p className='Nombre'>Nombre</p>
            </div>
            <div className="header">
                <p className="candidatos">Candidatos</p>
                <FontAwesomeIcon  className='chevronLeft' icon={faChevronLeft}  onClick={returnTabla} />
                <p>Nombre Apellido</p>
            </div>
            <hr style={{width: 1720}}></hr>
            <div className="ImagenCandidato">
                <Imagen />
            </div>
            <div className="NombreCandidatos">
                <h5>Nombre Apellido</h5>
                <p>Estado del candidato</p> 
            </div>
            <div className="subtitle">
                <FontAwesomeIcon className="map" icon={faMapMarkerAlt}  />
                <p className="p1">Valencia, España</p>
                <FontAwesomeIcon className="iconCircle" icon={faDotCircle}  />
                <p className="p2">En remoto. Sin traslado</p>
                <button className='butonContratado'>CONTRATADO</button>
            </div>
            
            <form className="containerFormulario">
                <label className="labelNombre">Nombre y Apellidos</label>
                <input className='nombreAlumno' type="text" placeholder='Nombre Alumno'></input>
                <label className='labelTelefono'>Nº Teléfono</label>
                <input type="text"></input>
                <label className='inputLabel'>Email</label>
                <input className='inputEmail' type="email" placeholder='email'></input>
                <label className='labelPais'>País</label>
                <select>
                    <option value="1"></option>
                    <option value="2">España</option>
                    <option value="3">Suiza</option>
                    <option value="4">Argentina</option>
                    <option value="5">Alemania</option>
                    <option value="6">Estados Unidos</option>
                </select>
                <label className='inputLabelCiudad'>Ciudad</label>
                <select className='inputCiudad'>
                    <option value="1"></option>
                    <option value="2">Málaga</option>
                    <option value="3">Barcelona</option>
                    <option value="4">Sevilla</option>
                    <option value="5">Galicia</option>
                    <option value="6">Valencia</option>
                </select>
                <label className='labelTraslado'>Traslado</label>
                <select>
                    <option value="1">Sí</option>
                    <option value="2">No</option>
                </select>
                <label className='inputPresencialidad'>Presencialidad</label>
                <select className='selectPresencialidad'>
                    <option value="1">Presencial</option>
                    <option value="2">Remoto</option>
                </select>
                <label>Enlace a Linkedin</label>
                <input type="text" placeholder="http://linkedin.com/user_id3423984324"></input>
                <label className="estadoLaboral">Estado laboral</label>
                <select className="selectEstadoLaboral">
                    <option value="Contratado"></option>
                    <option value="Pdte. Ofertas"></option>
                    <option value="Preseleccionado"></option>
                </select>
                <label className='labelDocumento'>Documento CV</label>
            <label htmlFor="file-upload" className="subir">  
            <FontAwesomeIcon className='iconCloud' icon={faCloudUploadAlt} />Subir de nuevo</label>
            <input required onChange={(e)=> setPdfFileEvent(e)} id="file-upload" className="inputFile" type="file" placeholder='Subir de nuevo'></input>
            {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
            <button className="borrar"> <FontAwesomeIcon className='trashIcon' icon={faTrashAlt} />Borrar</button>
            </form>
            <div className="rotate">
            <hr ></hr>
            </div>
           <NavTabs pdfFileEvent={pdfFileEvent} setPdfFileError={setPdfFileError} />
           
           </div>
           </div>
        
     );
}
 
export default Alumno;