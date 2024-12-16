import axios from "axios";

import { useActionData } from "react-router-dom";

// Para cargar los proyectos
export function GETTING_CATEGORIES(carga){
    return {
        type: 'GETTING_CATEGORIES',
        payload: carga
    }
}

// Almacenar el estado de todos los proyectos
export function GET_CATEGORIES(projects){
    return {
        type: 'GET_CATEGORIES',
        payload: projects
    }
}
// Petición HTTP para obtener todos los proyectos disponibles.
export function axiosGetCategories(carga){
    return function(dispatch){
        dispatch(GETTING_CATEGORIES(carga));
        axios.get('/get/category')
        .then((info) => info.data)
        .then(inf => {
            return dispatch(GET_CATEGORIES(inf));
        })
        .catch(e => {
            console.log(e);
            if(e.response &&  e.response.status == 404){
                return dispatch(GET_CATEGORIES(404))
            }else if(e.request){
                return dispatch(GET_CATEGORIES('request'))
            }else{
                return dispatch(GET_CATEGORIES(404))
            }
        })
    }
}

export function GET_CATEGORY(data){
    return {
        type: 'GET_CATEGORY',
        payload: data
    }
}
// Para cargar proyecto en especifico
export function GETTING_CATEGORY(carga){
    return {
        type: 'GETTING_CATEGORY',
        payload: carga
    }
}
// export function axiosGetCategory(carga, id){
//     return function(dispatch){
//         dispatch(GETTING_CATEGORY(carga));
//         axios.get(`/get/category/${id}`)
//         .then((info) => info.data)
//         .then(inf => {
//             return dispatch(GET_CATEGORY(inf));
//         })
//         .catch(e => {
//             console.log(e);
//             if(e.response &&  e.response.status == 404){
//                 return dispatch(GET_CATEGORY(404))
//             }else if(e.request){
//                 return dispatch(GET_CATEGORY('request'))
//             }else{
//                 return dispatch(GET_CATEGORY(404))
//             }
//         })
//     }
// }
// Almacenar estado del proyecto
export function getProject(project){
    return {
        type: 'GET_PROJECT',
        payload: project
    }
}
// Petición HTTP para obtener toda la información del proyecto. Incluidas las imagenes.
export function axiosGetCategory(carga, route){
    console.log('llega acá')
    return function(dispatch){
        dispatch(GETTING_CATEGORY(carga));
        axios.get('get/category/' + route)
        .then((info) => info.data)
        .then((data) => {
            console.log(data);
            return dispatch(GET_CATEGORY(data));
        })
        .catch(err => {
            // Mostramos posible error por consola.
            if(err.responses || err.response.status == 404){
                return dispatch(GET_CATEGORY(404))
            }else{  
                return dispatch(GET_CATEGORY('request'))
            }

        })
    }
}
export function getSub(data){
    return {
        type: 'GET_SUB',
        payload: data
    }
}

export function GettingSub(carga){
    return {
        type: 'GETTING_SUB',
        payload: carga
    }
}

// Petición HTTP para obtener toda la información del proyecto. Incluidas las imagenes.
export function axiosGetSubCategory(carga, cat, sub){
    console.log('llega acá')
    return function(dispatch){
        dispatch(GettingSub(carga));
        axios.get(`get/subcat/${cat}/${sub}`)
        .then((info) => {
            console.log(info)
            return info.data
        })
        .then((data) => {
            console.log(data);
            return dispatch(getSub(data));
        })
        .catch(err => {
            // Mostramos posible error por consola.
            if(err.responses || err.response.status == 404){
                return dispatch(getSub(404))
            }else{  
                return dispatch(getSub('request'))
            }

        })
    }
}

export function getProduct(data){
    return {
        type: 'GET_PRODUCT',
        payload: data
    }
}

export function gettingProduct(carga){
    return {
        type: 'GETTING_PRODUCT',
        payload: carga
    }
}
// Petición HTTP para obtener toda la información del proyecto. Incluidas las imagenes.
export function axiosGetProduct(carga, route){
    return function(dispatch){
        dispatch(gettingProduct(carga));
        axios.get('get/product/' + route)
        .then((info) => info.data)
        .then((data) => {
            console.log(data);
            return dispatch(getProduct(data));
        })
        .catch(err => {
            // Mostramos posible error por consola.
            console.log(err);
            if(err.responses && err.response.status == 404){
                return dispatch(getProduct(404))
            }else{
                return dispatch(getProduct('request'))
            }

        })
    }
}