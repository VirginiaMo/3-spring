import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import './Procesos.css'

const Procesos = () => {
    return ( 
        <div className='containerProcesos'>
                <button className='botonAñadir'><FontAwesomeIcon className='iconFaTimes' icon={faPlus} />Añadir proceso</button>
                <div className='containerFila'>
                    <p className='text1'>Titulo Oferta </p>
                    <p className='text2'>Nombre empresa SA</p>
                    <p className='text3'>7 candidatos</p>
                    <p className='text4'>Fecha plazo</p>
                    <p className='text5'>05 nov 2021</p>
                    <button className='botonEtiqueta'>PDTE. ENTREVISTA</button>
                </div>
                <div className='containerFila1'>
                    <p className='text1'>Titulo Oferta </p>
                    <p className='text2'>Nombre empresa SA</p>
                    <p className='text3'>7 candidatos</p>
                    <p className='text4'>Fecha plazo</p>
                    <p className='text5'>05 nov 2021</p>
                    <button className='entrevistado'>ENTREVISTADO</button>
                </div>
                <div className='containerFila2'>
                    <p className='text1'>Titulo Oferta </p>
                    <p className='text2'>Nombre empresa SA</p>
                    <p className='text3'>7 candidatos</p>
                    <p className='text4'>Fecha plazo</p>
                    <p className='text5'>05 nov 2021</p>
                    <button className='rechazado'>RECHAZADO</button>
                </div>
                <div className='containerFila3'>
                    <p className='text1'>Titulo Oferta </p>
                    <p className='text2'>Nombre empresa SA</p>
                    <p className='text3'>7 candidatos</p>
                    <p className='text4'>Fecha plazo</p>
                    <p className='text5'>05 nov 2021</p>
                    <button className='contratado'>CONTRATADO</button>
                </div>
               
        </div>
        
     );
}
 
export default Procesos;