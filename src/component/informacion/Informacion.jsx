

const Informacion = ( { alumno }) => {
  
    return (
      <form className="containerFormulario">
      <label className="labelNombre">Nombre y Apellidos</label>
      <input className='nombreAlumno' type="text" placeholder='Nombre Alumno' value={alumno.nombre}></input>
      <label className='labelTelefono'>Nº Teléfono</label>
      <input type="text" value={alumno.telefono}></input>
      <label className='inputLabel'>Email</label>
      <input className='inputEmail' type="email" placeholder='email'value={alumno.email}></input>
      <label className='labelP'>País</label>
      <select value={alumno.pais}>
          <option value="España">España</option>
          <option value="Suiza">Suiza</option>
          <option value="Argentina">Argentina</option>
          <option value="Alemania">Alemania</option>
          <option value="Estados Unidos">Estados Unidos</option>
      </select>
      <label className='inputLabelCiudad'>Ciudad</label>
      <select className='inputCiudad' value={alumno.ciudad}>
          <option value="Malaga">Málaga</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Sevilla">Sevilla</option>
          <option value="Galicia">Galicia</option>
          <option value="Valencia">Valencia</option>
      </select>
      <label className='labelTraslado'>Traslado</label>
      <select value={alumno.traslado}>
          <option value="Si">Sí</option>
          <option value="No">No</option>
      </select>
      <label className='inputPresencialidad'>Presencialidad</label>
      <select className='selectPresencialidad' value={alumno.presencialidad}>
          <option value="Presencial">Presencial</option>
          <option value="Remoto">Remoto</option>
      </select>
      <label>Enlace a Linkedin</label>
      <input type="text" placeholder="http://linkedin.com/user_id3423984324" value={alumno.linkedin}></input>
      <label className="estadoLaboral">Estado laboral</label>
      <select className="selectEstadoLaboral" value={alumno.estado}>
          <option value="Contratado">Contratado</option>
          <option value="Pdte. Ofertas">Pdte. Ofertas</option>
          <option value="Preseleccionado">Preseleccionado</option>
      </select>
      </form>
      );
}
 
export default Informacion;