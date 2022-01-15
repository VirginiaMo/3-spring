import SearchPage from '../../searchPage/searchPage';
import Buscador from '../../buscador/Buscador';
import TablaOrdenada from '../../TablaOrdenada';
import { useState } from "react";
import Filtros from '../../filtros/Filtros';
import Navbar from '../../navbar/Navbar';



const Candidatos= () => {

    const [searchText, setSearchText] = useState('')

    //const hideColumns = ["nombre"];

    return ( 
        <>  <Navbar />
            <SearchPage/>
            <Buscador setSearchText={setSearchText} title={"Alumno"}/>
            <TablaOrdenada searchText={searchText} />
            <Filtros />
       
        </>
     );
}
 
export default Candidatos;