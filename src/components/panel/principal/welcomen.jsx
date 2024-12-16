import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import EditCategory from './modales/editarCategoria';
import NewCategory from './modales/newCategorie';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../components/store/actions/actions';

export default function WelcomenAdmin(){
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const categories = useSelector(store => store.categories);
    const loading = useSelector(store => store.loadingCategories);
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(null);

    const editCategory = (data) => {
        dispatch(actions.GET_CATEGORY(data))
        params.set('w', 'edit');
        setParams(params);
    }
    const createCategory = () => {
        params.set('w', 'new');
        setParams(params);
    }
    // Abrir categoria
    const open = (data) => {
        dispatch(actions.GET_CATEGORY(data))
        navigate(`category/${data.id}`)
    }

    useEffect(() => {
        dispatch(actions.axiosGetCategories(true))
    }, [])
    return (
        <div className="welcomen">
            {
                params.get('w') == 'edit' ?
                    <EditCategory />
                : params.get('w') == 'new' ?
                    <NewCategory />
                : null
            }
            <div className="containerWelcomen">
                <div className="topMessage">
                    <h1>¡Bienvenido al panel de Modulares costa!</h1>
                    <span>Admnistra la información basica del website, desde aquí.</span>
                </div>

                <div className="categories">
                    <div className="topTitle">
                        <h1>Nuestras categorías ({categories && categories.length ? categories.length : 0})</h1>
                        <button  onClick={() => createCategory()}>
                            <span>+ Nueva categoría</span>
                        </button>
                    </div>
                    {
                        loading || !categories ?
                            <h1>Cargando...</h1>
                        :
                        categories == 404 || categories == 'request' ?
                            <h1>No hemos encontrado resultados</h1>
                        : 
                        <div className="containerCategories">
                            {
                                categories && categories.length ? 
                                    categories.map((cat, i) => {
                                        return (
                                            <div className="category" key={i+1} >
                                                <div className="wallpaperCat" onClick={() => open(cat)}>
                                                    <img src={cat.wallpaper} alt="" />
                                                </div>
                                                <div className="data">
                                                    <h3>{cat.title}</h3>
                                                </div>
                                                <div className="options">
                                                    <button onClick={() => editCategory(cat)}>
                                                        <span>Editar</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })
                                :
                                    <h1>No hay resultados</h1>
                            }
                        </div>
                        
                    }

                </div>
            </div>
        </div>


    )
}