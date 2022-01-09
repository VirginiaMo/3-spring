import SearchPage from '../../searchPage/searchPage';
import Buscador from '../../buscador/Buscador';
import TablaOrdenada from '../../TablaOrdenada';
import { useState } from "react";
import Filtros from '../../filtros/Filtros';



const Candidatos= () => {

    const [searchText, setSearchText] = useState('')

    //const hideColumns = ["nombre"];

    return ( 
        <>  
            <SearchPage/>
            <Buscador setSearchText={setSearchText} title={"Alumno"}/>
            <TablaOrdenada searchText={searchText} />
            <Filtros />
       
        </>
     );
}
 
export default Candidatos;