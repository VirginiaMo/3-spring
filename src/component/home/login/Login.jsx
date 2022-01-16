import './Login.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';/*
import HeaderHome from '../header/HeaderHome'
import FooterHome from '../footer/FooterHome';
import ImagenHome from '../imagen/ImagenHome';
import '../Home.css';*/

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


export default function Login ({setToken}) {

    const [useremail, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          useremail,
          password
        });
        setToken(token);
      }

    return (  
            <form className="formulario" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input placeholder="Introduce tu correo"
                    onChange={e => setEmail(e.target.value)}
                    ></input>
                    <label>Contraseña</label>
                    <input type="text" placeholder="Introduce tu contraseña"
                    onChange={e => setPassword(e.target.value)}
                    ></input>
            
                    <input className="inputBox" type="checkbox"></input>
                    <label className='recuerdame'>Recuérdame</label>
                    <a className='anchor' href="/#">He olvidado la contraseña</a>
                
                    <button type="submit">Iniciar Sesión</button>
            </form>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }