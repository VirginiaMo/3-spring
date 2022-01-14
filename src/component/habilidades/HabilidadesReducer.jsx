const types = {
    TECNOLOGIAS: 'TECNOLOGIAS',
    IDIOMAS: 'IDIOMAS',
    DELETE_TAG : "DELETE_TAG",
    DELETE:"DELETE_IDIOMAS"
    
}

const initialState ={
    tecnologias:[""],
    idiomas:[""]    
};
const reducer = (state, action) =>{

    // eslint-disable-next-line default-case
    switch(action.type) {
        case types.TECNOLOGIAS:
            return{ ...state, tecnologias: state.tecnologias.concat(action.value) };      
        case types.IDIOMAS:
            return { ...state, idiomas: state.idiomas.concat(action.value)};
        case types.DELETE_TAG: {
                let toRemoveIndex = state.tecnologias.indexOf(action.value);
                return{ ...state, tecnologias: state.tecnologias.splice(toRemoveIndex, 1) }; 
              };
        case types.DELETE_IDIOMAS: {
                let toRemoveIndex = state.idiomas.indexOf(action.value);
                return{ ...state, idiomas: state.idiomas.splice(toRemoveIndex, 1) }; 
              }
       case types.RESET: 
       {
           
            return initialState;     
       }
                
    }
};



export default {reducer, types, initialState }