import './Perfil.css';
import Navbar from '../../../navbar/Navbar';
import SearchPage from '../../../searchPage/searchPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faDotCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Imagen from '../../../image/Image';
import { Tab, Tabs } from "react-bootstrap";
import Habilidades from '../../../habilidades/Habilidades';
import PDF from '../../../CV/PDF';
import Procesos from '../../../procesos/Procesos';
import Informacion from '../../../informacion/Informacion';
import { useState } from 'react';
import {  useParams } from "react-router-dom";
import useCandidatos from "../../../customHooks/candidatos/useCandidatos"


const Perfil = () => {

    const [key, setKey] = useState('informacion');
    const { id } = useParams();
    console.log(id);

/*console.
    const { state } = useLocation();
    const loc = useLocation();
    console.log(loc);
    const idAlumno = state;
    console.log(idAlumno);*/

    //const { idAlumno } = route.params;
    const { candidatos } = useCandidatos();
    
    
    console.log(candidatos);
    const alumno = candidatos.find(x => x.id === parseInt(id, 10));
    console.log(alumno);

    return ( 
        <div className='containerPerfil'>
            <Navbar />
            <SearchPage/>
                <div className="header">
                    <p className="candidatos">Candidatos</p>
                    <FontAwesomeIcon  className='chevronLeft' icon={faChevronLeft} />
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
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className='tagsPerfil'>
                    <Tab eventKey="informacion" title="Información">
                    <Informacion alumno={alumno}/>
                    </Tab>
                    <Tab eventKey="home" title="Habilidades">
                    <Habilidades />
                    </Tab>
                    <Tab eventKey="PDF" title="Currículum Vitae">
                    
            {/*        <PDF pdfFileEvent={props.pdfFileEvent} setPdfFileError={props.setPdfFileError}  />*/}
                    </Tab>
                    <Tab eventKey="procesos" title="Procesos">
                    <Procesos />
                    </Tab>
                </Tabs>
        </div>
     );
}
 
export default Perfil ;