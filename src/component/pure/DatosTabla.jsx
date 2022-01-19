import './DatosTabla.css';
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import useCandidatos from "../customHooks/candidatos/useCandidatos"


export default function DatosTabla( { sortBy, searchBy, hideColumns}){

	const { candidatos } = useCandidatos();
    const[sortedData, setSortedData] = useState([]);

    React.useMemo(() => {
        let sortedDatos = [...candidatos];
        if (sortBy !== null) {
            sortedDatos.sort((a, b) => {
                if (a[sortBy.key] < b[sortBy.key]) {
                  return sortBy.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortBy.key] > b[sortBy.key]) {
                  return sortBy.direction === 'ascending' ? 1 : -1;
                }
                return 0;
              });
          }
          setSortedData(sortedDatos);
        return sortedDatos;
    }, [candidatos, sortBy]);
	
    
	const getTableColor = criterio => {
		
		switch (criterio) {
		  case "PRESELECCIONADO":
			return { backgroundColor: '#3684FA'}
		  case "PDTE. OFERTAS":
			return { backgroundColor: "#3FCBF8" }
		  case "CONTRATADO":
			return { backgroundColor: '#36E4A6' }
		  default:
			return { backgroundColor: 'white', color: 'black' }
		}
	  }

	
	let navigate = useNavigate();
	function handleClick() {
		navigate('/alumnos', {replace: true});
	}
	
	return 	(
		
		<tbody>
			{sortedData.filter((item)=>{
				if(searchBy == ""){
					return item
				}else if(item.nombre.toLowerCase().includes(searchBy.toLocaleLowerCase())
					|| item.ciudad.toLowerCase().includes(searchBy.toLocaleLowerCase())
					|| item.pais.toLowerCase().includes(searchBy.toLocaleLowerCase())
					|| item.email.toLowerCase().includes(searchBy.toLocaleLowerCase())
					|| item.ciudad.toLowerCase().includes(searchBy.toLocaleLowerCase())){
					return item
				}
			}).map((item, index) => (
				<tr key={index} onClick={handleClick} >
				    { (hideColumns == undefined || !hideColumns.includes("nombre")) && <td> {item.nombre}</td>}
					{ (hideColumns == undefined || !hideColumns.includes("ciudad")) && <td>{item.ciudad}</td> }
					{ (hideColumns == undefined || !hideColumns.includes("pais")) && <td>{item.pais}</td> }
					{ (hideColumns == undefined || !hideColumns.includes("telefono")) && <td>{item.telefono}</td> }
					{ (hideColumns == undefined || !hideColumns.includes("email")) &&<td>{item.email}</td>}
					{ (hideColumns == undefined || !hideColumns.includes("etiquetas")) && <td>{item.etiquetas.map(etiqueta => { return <span className="btn-primary">{etiqueta}</span> })}</td>}
					{ (hideColumns == undefined || !hideColumns.includes("estado")) && <td style={getTableColor(item.estado)} className='btn'>{item.estado}</td>}
					</tr>
			))}
		</tbody> 
		)
}