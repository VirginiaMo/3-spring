import {useEffect, useContext} from "react";
import { AppContext } from "../../../context/appContext";

export default function useCandidatos() {

  const { candidatos, setCandidatos } = useContext(AppContext);

	useEffect(() => { 
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
    }

		
	}, [setCandidatos]);

  const addCandidato = candidato => {
    
    let nextId = Math.max.apply(Math, candidatos.map(function(c) { return c.id; })) + 1;
    candidato.id = nextId;
    setCandidatos(candidatos.concat(candidato));
    localStorage.setItem('datosCandidatos', JSON.stringify(candidatos.concat(candidato)));
    return candidato;
  };

  return {
    addCandidato: addCandidato,
    candidatos
  }

}