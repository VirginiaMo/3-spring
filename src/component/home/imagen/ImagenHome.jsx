import Login from '../../../assets/Login.png';
import './ImagenHome.css';


    const imagen = () => {

        return (

            <div className='imagenHome'>
                <img src={Login} alt='imagen' />
            </div>
        );
    }
 
export default imagen;