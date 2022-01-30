import {useEffect, useContext} from "react";
import { AppContext } from "../../../context/appContext";

export default function useCandidatos() {

  const { candidatos, setCandidatos } = useContext(AppContext);
  const { apiToken, setApiToken } = useContext(AppContext);
  const { isCandidatosReady, setIsCandidatosReady } = useContext(AppContext);

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
            .catch(error => console.log('error', error));
      } else {
        setApiToken(storageApiToken);
      } 
      
      if (apiToken !== undefined) {
        getCandidatos(apiToken, setCandidatos);
        setIsCandidatosReady(true);
      }
		
	}, [apiToken, setIsCandidatosReady]);

  const addCandidato = async candidato => {

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
      "enlaceLinkedin":candidato.linkedin,
      "disponibilidadTraslado":candidato.traslado === "Sí" ? true : false,
      "remoto": candidato.presencialidad === "Presencial" ? true : false,
      "avatar":candidato.avatar,
      "userId":candidato.userId,
      "created_at":candidato.created_at,
      "updated_at":candidato.updated_at,
      "lastEstadoUpdate":candidato.lastEstadoUpdate,
      "user": {
        "id": 5,
        "username": "virginia",
        "avatar": null
      },
      "entrevistas":candidato.entrevistas,
      "idiomas":candidato.idiomas,
      
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

  };

  const getCandidato = async id => {

    if (apiToken === undefined) {
      console.log("no apitoken");
      return;
    };
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + apiToken);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    return await fetch("https://api-fc.herokuapp.com/api/candidatos/" + id, requestOptions)
      .then(response =>  { return response.json(); })
      .then(responseJson => { const resp = getMappedCandidato(responseJson.data); console.log(resp); return resp; } )
      .catch(error => console.log('error', error));

  }

  return {
    addCandidato: addCandidato,
    getCandidato: getCandidato,
    candidatos,
    isCandidatosReady : isCandidatosReady
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

  await fetch("https://api-fc.herokuapp.com/api/candidatos", requestOptions)
    .then(response => response.json().then(responseJson => {

      const mappedData = responseJson.data.data.map(x => getMappedCandidato(x));
      setCandidatos(mappedData);

    }))
    .catch(error => console.log('error', error));
}

function getMappedCandidato(input) {
  const output = {
    nombre: input.nombreCompleto,
    id: input.id,
    ciudad: input.ciudad === null ? "" : input.ciudad,
    pais: input.pais === null ? "" : input.pais,
    telefono: input.telefono,
    email: input.email,
    etiquetas: input.tecnologias.map(x => x.nombre),
    estado: input.estado.toUpperCase(),
    fechaAlta: input.fechaAlta,
    cv: input.cv,
    perfil: input.perfil,
    fechaUltimoContacto: input.fechaUltimoContacto,
    experienciaGlobal: input.experienciaGlobal,
    salarioActual: input.salarioActual,
    salarioDeseado: input.salarioDeseado,
    habilidadesComunicacion: input.habilidadesComunicacion,
    feedbackEntrevista: input.feedbackEntrevista,
    observaciones: input.observaciones,
    enlaceLinkedin: input.enlaceLinkedin,
    disponibilidadTraslado: input.disponibilidadTraslado,
    remoto: input.remoto,
    avatar: input.avatar,
    userId: input.userId,
    created_at: input.created_at,
    updated_at: input.updated_at,
    lastEstadoUpdate: input.lastEstadoUpdate,
    user: input.user,
    entrevistas: input.entrevistas,
    idiomas: input.idiomas
  };
  return output;
}
