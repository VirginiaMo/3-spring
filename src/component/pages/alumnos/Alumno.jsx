import React,{useState, useEffect} from 'react'
import { faChevronLeft, faCloudUploadAlt, faDotCircle, faMapMarkerAlt, faSearch, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Imagen from "../../image/Image";
import NavTabs from "../../tabs/Tabs";
import './Alumno.css';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import useCandidatos from '../../customHooks/candidatos/useCandidatos';
import { TailSpin } from 'react-loader-spinner';

const Alumno =  () => {
 

    const [pdfFileError, setPdfFileError]=useState('');
    const [pdfFileEvent, setPdfFileEvent]=useState('');

    const [alumno, setAlumno]=useState({});

    const { id } = useParams();
    const { isCandidatosReady, getCandidato } = useCandidatos();

    console.log("id " + id);    

    useEffect( () => { 
        async function getCand() {
            console.log(id)
            const res = await getCandidato(id);
            
            if (res !== undefined) {
                setAlumno(res);
            }            
          }
          console.log("llamada");
          if (isCandidatosReady) {
            getCand();
          }
                 
    }, [isCandidatosReady]);


    let navigate = useNavigate();
    function returnTabla() {
        navigate('/candidatos', {replace: true});
    }


    return alumno === undefined ? (<TailSpin type="Circles" color="#00BFFF" height={640} width={480}/>) : ( 

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
                <input className='nombreAlumno' type="text" placeholder='Nombre Alumno' value={alumno.nombre}></input>
                <label className='labelTelefono'>Nº Teléfono</label>
                <input type="text" value={alumno.telefono}></input>
                <label className='inputLabel'>Email</label>
                <input className='inputEmail' type="email" placeholder='email'  value={alumno.email}></input>
                <label >País</label>
                <select>
                <option value={alumno.pais}>{alumno.pais}</option> 
                 
                </select>
                <label className='inputLabelCiudad'>Ciudad</label>
                <select className='inputCiudad'>
                <option value={alumno.ciudad}>{alumno.ciudad}</option> 
                </select>
                <label className='labelTraslado'>Traslado</label>
                <select>
                <option value={alumno.traslado}>{alumno.traslado}</option> 
                </select>
                <label className='inputPresencialidad'>Presencialidad</label>
                <select className='selectPresencialidad'>
                <option value={alumno.presencialidad}>{alumno.presencialidad}</option> 
                </select>
                <label>Enlace a Linkedin</label>
                <input type="text" placeholder="http://linkedin.com/user_id3423984324"  value={alumno.linkedin}></input>
                <label className="estadoLaboral">Estado laboral</label>
                <select className="selectEstadoLaboral">
                <option value={alumno.estado}>{alumno.estado}</option> 
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