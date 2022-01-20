

const types = {
    TECNOLOGIAS: 'TECNOLOGIAS',
    PAIS: 'PAIS',
    CIUDAD:'CIUDAD',
    PRESENCIALIDAD:'PRESENCIALIDAD',
    TRASLADO:'TRASLADO',
    ESTADO:'ESTADO',
    DELETE_TECNOLOGIA : "DELETE_TECNOLOGIA",
    RESET: "RESET"
}

const initialFormState ={
    tecnologias:[""],
    ciudad:"",
    pais:"",
    presencialidad:"",
    traslado:"",
    estado:"",    
};


const reducer = (state, action) =>{
   

    // eslint-disable-next-line default-case
    switch(action.type) {
        case types.TECNOLOGIAS:
            return{ ...state, tecnologias: state.tecnologias.concat(action.value) };      
        case types.CIUDAD:
            return { ...state, ciudad: action.value}
        case types.PAIS:
            return {...state, pais: action.value }
        case types.PRESENCIALIDAD:
            return{ ...state, presencialidad: action.value}
        case types.TRASLADO:
            return {...state, traslado: action.value}
        case types.ESTADO:
            return {...state, estado: action.value}
        case types.DELETE_TECNOLOGIA: {
                let toRemoveIndex = state.tecnologias.indexOf(action.value);
                return{ ...state, tecnologias: state.tecnologias.splice(toRemoveIndex, 1) }; 
              }
       case types.RESET: 
       {           
            return initialFormState;     
       }
                
    }
};



export default { reducer, types, initialFormState }