import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import NewProduct from './modales/newProduct';
import EditProduct from './modales/editProduct';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../store/actions/actions';
import UpdatePhoto from './modales/uploadPhoto';
import NewSub from './modales/newSub';
import NewCategory from './modales/newCategorie';

export default function SubCategoryPanel(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { nameCat, nameSubCat } = useParams();
    const [params, setParams] = useSearchParams();
    const [edit, setEdit] = useState(null);


    const sub = useSelector(store => store.sub);
    const loading = useSelector(store => store.loadingSub);
    

    const editProduct = (data) => {
        dispatch(actions.getProduct(data))
        params.set('w', 'edit');
        setParams(params);
    }
    const updatePhotos = (data) => {
        dispatch(actions.getProduct(data))
        params.set('w', 'photos');
        setParams(params);
    }
    const createProduct = () => {
        params.set('w', 'new');
        setParams(params);
    }
    console.log(nameCat)
    useEffect(() => {
        if(sub && sub.id && nameSubCat == sub.id){
        }else{
            dispatch(actions.axiosGetSubCategory(true, nameCat, nameSubCat))
        }
    }, [nameCat])
    return (
        loading || !sub ? 
            <div className="loading">
                <h1>Cargando</h1>
            </div>
        : !sub || sub == 404 || sub == 'requiest' ?
            <div className="loading">
                <h1>Not found</h1>
            </div>
        :
        <div className="welcomen">
            {
                params.get('w') == 'edit' ?
                    <EditProduct category={sub} />
                : params.get('w') == 'new' ?
                    <NewProduct category={sub} />
                : params.get('w') == 'photos' ? 
                    <UpdatePhoto category={sub} />
                : null
            }

            
            <div className="containerWelcomen">
                <button className='back' onClick={() => navigate(`/panel/category/${sub.categoryId}`)}>
                    <MdArrowBack className="icon" />
                    <span>Regresar</span>
                </button><br /><br />
                <span className='pseudo'>Categoría</span><br /><br />
                <div className="topMessage">
                    <h1>¡{sub.title}!</h1>
                    {console.log(sub)}
                </div>
                
                <div className="categories">
                    <div className="topTitle">
                        <h1>Nuestros productos ({sub.products && sub.products.length ? sub.products.length : 0})</h1>
                        <button  onClick={() => createProduct()}>
                            <span>+ Nuevo producto</span>
                        </button>
                    </div>
                    <div className="containerCategories">
                        {
                            sub.products && sub.products.length ?
                                sub.products.map((pr, i) => {
                                    return (
                                        <div className="category" key={i+1}>
                                            <div className="wallpaperCat" onClick={() => updatePhotos(pr)}>
                                                <img src={pr.photo} alt="" />
                                            </div>
                                            <div className="data">
                                                <h3>{pr.name}</h3>
                                                <h4>{pr.referencia}</h4>
                                            </div>
                                            <div className="options">
                                                <button onClick={() => editProduct(pr)}>
                                                    <span>Editar</span>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            : <h1>No hay productos</h1>
                        }
                        
                        

                    </div>
                </div>
            </div>

            
        </div>


    )
}