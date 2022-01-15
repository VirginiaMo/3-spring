import './Login.css'

const login = () => {
    return (  

        <div className="formulario">
                <label>Email</label>
                <input placeholder="Introduce tu correo"></input>
                <label>Contraseña</label>
                <input type="text" placeholder="Introduce tu contraseña"></input>
           
                <input className="inputBox" type="checkbox"></input>
                <label className='recuerdame'>Recuérdame</label>
                <a className='anchor' href="/#">He olvidado la contraseña</a>
            
                <button>Iniciar Sesión</button>
        </div>
       
    );
}
 
export default login;