const types = {
    NOMBRE_APELLIDOS: 'NOMBRE Y APELLIDOS',
    PAIS: 'PAIS',
    CIUDAD:'CIUDAD',
    TELEFONO:'TELEFONO',
    EMAIL:'EMAIL',
    PRESENCIALIDAD:'PRESENCIALIDAD',
    TRASLADO:'TRASLADO',
    LINKEDIN:'LINKEDIN',
    SUBIR_IMAGEN:'SUBIR IMAGEN',
    SUBIR_DOCUMENTO:'SUBIR DOCUMENTO',
    ETIQUETAS: 'ETIQUETAS',
    RESET: "RESET"
}

const initialFormState ={
    nombre:"",
    pais:"",
    ciudad:"",
    telefono:"",
    email:"",
    linkedin:"",
    subir_documento:"",
    subir_imagen:"",
    presencialidad:"",
    traslado:"",
    etiquetas:"",    
};


const reducer = (state, action) =>{
   

    // eslint-disable-next-line default-case
    switch(action.type) {
        case types.NOMBRE_APELLIDOS:
            return{ ...state, nombre: action.value };      
        case types.CIUDAD:
            return { ...state, ciudad: action.value}
        case types.PAIS:
            return {...state, pais: action.value }
        case types.PRESENCIALIDAD:
            return{ ...state, presencialidad: action.value}
        case types.TRASLADO:
            return {...state, traslado: action.value}
        case types.TELEFONO:
            return {...state, telefono: action.value}
        case types.EMAIL: 
            return  {...state,email: action.value}
        case types.LINKEDIN: 
            return  {...state, linkedin: action.value}
        case types.ETIQUETAS: 
            return  {...state, etiquetas: action.value} 
        case types.SUBIR_DOCUMENTO: 
            return  {...state, subir_documento: action.value}
        case types.SUBIR_IMAGEN: 
            return  {...state, subir_imagen: action.value}   
       case types.RESET: 
       {
           
            return initialFormState;     
       }
                
    }
};



export default { reducer, types, initialFormState }