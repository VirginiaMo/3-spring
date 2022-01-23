import {useEffect, useContext} from "react";
import { AppContext } from "../../../context/appContext";

export default function useCandidatos() {

  const { candidatos, setCandidatos } = useContext(AppContext);
  const { apiToken, setApiToken } = useContext(AppContext);

	useEffect(() => { 

      const storageApiToken = localStorage.getItem('apiToken');
      if (storageApiToken === null) {
          let requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          fetch("https://api-fc.herokuapp.com/authAPI/login?email=virginia.morilla@gmail.com&password=123456", requestOptions)
            .then(response => response.json().then(data => {
                localStorage.setItem("apiToken", data.token.token);
                setApiToken(data.token.token);
                
            }))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
      } else {
        setApiToken(storageApiToken);
      } 

      if (apiToken !== undefined) {
        getCandidatos(apiToken, setCandidatos);
      }

      

/*
    const datosCandidatos = localStorage.getItem('datosCandidatos');
    if (datosCandidatos === null)
    {           
      fetch('/data/data.json')
      .then(response => {  return response.json(); })
      .then(datos => setCandidatos(datos))

    } else 
    {
      const cand = JSON.parse(datosCandidatos);
      setCandidatos(cand)
    }*/
		
	}, [apiToken, setApiToken, setCandidatos]);

  const addCandidato = async candidato => {

    // cambiar autorizacion apra usar tu token de la api como en el de arriba
    // cambiar el contenido que se envia para poner lo que viene de la variable candidato
    // en la promesa de la respuesta, traer el json() y devolver el id

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + apiToken);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({      
      "nombreCompleto": candidato.nombre,
      "id": candidato.id,
      "ciudad": candidato.ciudad,
      "pais": candidato.pais, 
      "telefono": candidato.telefono,
      "email": candidato.email,
      "tecnologias": candidato.tecnologias,
     "estado": candidato.estado,
      "fechaAlta": candidato.fechaAlta,
      "cv": candidato.cv,
      "perfil":candidato.perfil,
      "fechaUltimoContacto": candidato.fechaUltimoContacto,
      "experienciaGlobal": candidato.experienciaGlobal,
      "salarioActual": candidato.salarioActual,
      "salarioDeseado": candidato.salarioDeseado,
      "habilidadesComunicacion":candidato.habilidadesComunicacion,
      "feedbackEntrevista":candidato.feedbackEntrevista,
      "observaciones":candidato.observaciones,
      "enlaceLinkedin":candidato.enlaceLinkedin,
      "disponibilidadTraslado":candidato.disponibilidadTraslado,
      "remoto":candidato.remoto,
      "avatar":candidato.avatar,
      "userId":candidato.userId,
      "created_at":candidato.created_at,
      "updated_at":candidato.updated_at,
      "lastEstadoUpdate":candidato.lastEstadoUpdate,
      "user":candidato.user,
      "entrevistas":candidato.entrevistas,
      "idiomas":candidato.idiomas
       });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    
    const id = await fetch("https://api-fc.herokuapp.com/api/candidatos", requestOptions)
            .then(response =>  { return response.json(); })
            .then(responseJson => { return responseJson.data.id; } )
            .catch(error => console.log('error', error));
    await getCandidatos(apiToken, setCandidatos);
    return id;




    /*
    let nextId = Math.max.apply(Math, candidatos.map(function(c) { return c.id; })) + 1;
    candidato.id = nextId;
    setCandidatos(candidatos.concat(candidato));
    localStorage.setItem('datosCandidatos', JSON.stringify(candidatos.concat(candidato)));
    return candidato;*/
  };

  return {
    addCandidato: addCandidato,
    candidatos
  }

}

async function getCandidatos(apiToken, setCandidatos) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + apiToken);

  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  await fetch("https://api-fc.herokuapp.com/api/candidatos?todos=true", requestOptions)
    .then(response => response.json().then(responseJson => {

      const mappedData = responseJson.data.data.map(x => ({
        nombre: x.nombreCompleto,
        id: x.id,
        ciudad: x.ciudad === null ? "" : x.ciudad,
        pais: x.pais === null ? "" : x.pais,
        telefono: x.telefono,
        email: x.email,
        etiquetas: x.tecnologias,
        estado: x.estado,
        fechaAlta: x.fechaAlta,
        cv: x.cv,
        perfil: x.perfil,
        fechaUltimoContacto: x.fechaUltimoContacto,
        experienciaGlobal: x.experienciaGlobal,
        salarioActual: x.salarioActual,
        salarioDeseado: x.salarioDeseado,
        habilidadesComunicacion: x.habilidadesComunicacion,
        feedbackEntrevista: x.feedbackEntrevista,
        observaciones: x.observaciones,
        enlaceLinkedin: x.enlaceLinkedin,
        disponibilidadTraslado: x.disponibilidadTraslado,
        remoto: x.remoto,
        avatar: x.avatar,
        userId: x.userId,
        created_at: x.created_at,
        updated_at: x.updated_at,
        lastEstadoUpdate: x.lastEstadoUpdate,
        user: x.user,
        entrevistas: x.entrevistas,
        idiomas: x.idiomas
      }));
      setCandidatos(mappedData);

    }))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
