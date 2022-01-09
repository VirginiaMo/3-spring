import SearchPage from '../../searchPage/searchPage';
import TablaOrdenada from '../../TablaOrdenada';
import { useState } from "react";
import Filtros from '../../filtros/Filtros';
import Buscador from '../../buscador/Buscador';



const Clientes= () => {

    const [searchText, setSearchText] = useState('')
    const hideColumns = ["estado"];

    return ( 
        <>  
            <SearchPage/>
                
            <Buscador setSearchText={setSearchText} title={"Cliente"} />
            <TablaOrdenada searchText={searchText} hideColumns={hideColumns} />
            <Filtros />
       
        </>
     );
}
 
export default Clientes;