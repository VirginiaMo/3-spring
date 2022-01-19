import { useState } from "react";
import DatosTabla from './pure/DatosTabla';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


export default function TablaOrdenada( { searchText, hideColumns }) {

	const[sortBy, setSortBy] = useState(null); 

	const requestSort = key => {
		let direction = 'ascending';
		if (sortBy && sortBy.key === key &&	sortBy.direction === 'ascending') {
		  direction = 'descending';
		}
		setSortBy({ key, direction });
	  }

    return (	
			<div className='containerTabla'>
	          <Table>
	            <thead>
	             <tr className='tabla'>
				  { (hideColumns == undefined || !hideColumns.includes("nombre")) && <th>NOMBRE <FontAwesomeIcon icon={faExchangeAlt} onClick={() => requestSort('nombre')} /></th> }
				  { (hideColumns == undefined || !hideColumns.includes("ciudad")) &&  <th>CIUDAD <FontAwesomeIcon icon={faExchangeAlt}  onClick={() => requestSort('ciudad')} /></th>}
				  { (hideColumns == undefined || !hideColumns.includes("pais")) &&  <th>PAÍS <FontAwesomeIcon icon={faExchangeAlt}  onClick={() => requestSort('pais')} /></th>}
				  { (hideColumns == undefined || !hideColumns.includes("telefono")) &&   <th>TELÉFONO </th>}
				  { (hideColumns == undefined || !hideColumns.includes("email")) &&  <th>CORREO ELECTRÓNICO <FontAwesomeIcon icon={faExchangeAlt}  onClick={() => requestSort('email')} /></th>}
				  { (hideColumns == undefined || !hideColumns.includes("etiquetas")) &&  <th>TECNOLOGÍAS <FontAwesomeIcon icon={faExchangeAlt}  onClick={() => requestSort('etiquetas')} /></th>}
				  { (hideColumns == undefined || !hideColumns.includes("estado")) &&   <th>ESTADO</th>}
				  
	              </tr>
	            </thead> 

				<DatosTabla sortBy={sortBy} searchBy={searchText} hideColumns={hideColumns} />
	          </Table>
			</div>
	)
}