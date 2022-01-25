import {useEffect, useContext} from "react";
import { AppContext } from "../../../context/appContext";

export default function useTecnologias() {

  const { tecnologias, setTecnologias } = useContext(AppContext);
  const { apiToken, setApiToken } = useContext(AppContext);

  // Todo : move outside to reuse
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
      getTecnologias(apiToken, setTecnologias);
    }
      
  }, [apiToken, setApiToken, setTecnologias]);

  const addTecnologia = async tech => {
/*
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
    return id;*/

  };

  return {
    addTecnologia: addTecnologia,
    tecnologias
  }

}

async function getTecnologias(apiToken, setTecnologias) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + apiToken);

  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  await fetch("https://api-fc.herokuapp.com/api/tecnologias?todos=true", requestOptions)
    .then(response => response.json().then(responseJson => {

      const mappedData = responseJson.data.data.map(x => getMappedTech(x));
      setTecnologias(mappedData);

    }))
    .catch(error => console.log('error', error));
}

function getMappedTech(input) {
  return input.nombre;
}