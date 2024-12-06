import {createStore} from 'redux';

const initialState = {
    // Estados generales
    login: false,
    setLoading: false,
    
    categories:null, // Todos los proyectos.
    loadingCategories:false, // Cargando los proyectos.

    category:null,
    loadingCategory: false,

    product:null,
    loadingProduct:null,

}

export default (state = initialState, action) => {
    switch(action.type){
        case 'GETTING_CATEGORIES':
            return {
                ...state,
                loadingCategories: action.payload
            }
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories:action.payload,
                loadingCategories: false
            }
        
        case 'GETTING_CATEGORY':
            return {
                ...state,
                loadingCategory: action.payload
            }
        case 'GET_CATEGORY':
            return {
                ...state,
                category: action.payload,
                loadingCategory: false
            }
        case 'GET_PRODUCT':
                return {
                    ...state,
                    product: action.payload,
                    loadingProduct: false
                }
        default:
            return {
                ...state
            }
    }
}