

const Informacion = ( { alumno }) => {
  console.log(alumno);
    return (
      <form className="containerFormulario">
      <label className="labelNombre">Nombre y Apellidos</label>
      <input className='nombreAlumno' type="text" placeholder='Nombre Alumno' value={alumno.nombre}></input>
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
      </form>
      );
}
 
export default Informacion;