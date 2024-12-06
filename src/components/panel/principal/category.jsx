import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import NewProduct from './modales/newProduct';
import EditProduct from './modales/editProduct';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../store/actions/actions';
import UpdatePhoto from './modales/uploadPhoto';

export default function Category(){
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const category = useSelector(store => store.category);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(null);

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
    return (
        <div className="welcomen">
            {
                params.get('w') == 'edit' ?
                    <EditProduct category={category} />
                : params.get('w') == 'new' ?
                    <NewProduct category={category} />
                : params.get('w') == 'photos' ? 
                    <UpdatePhoto category={category} />
                : null
            }
            {
                category ?
            
            <div className="containerWelcomen">
                <button className='back' onClick={() => navigate('/panel')}>
                    <MdArrowBack className="icon" />
                    <span>Regresar</span>
                </button><br /><br />
                <span className='pseudo'>Categoría</span><br /><br />
                <div className="topMessage">
                    <h1>¡{category.title}!</h1>
                    <span>{category.bigDescription}.</span>
                </div>

                <div className="categories">
                    <div className="topTitle">
                        <h1>Nuestros productos ({category.products && category.products.length ? category.products.length : 0})</h1>
                        <button  onClick={() => createProduct()}>
                            <span>+ Nuevo producto</span>
                        </button>
                    </div>
                    <div className="containerCategories">
                        {
                            category.products && category.products.length ?
                                category.products.map((pr, i) => {
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
            : 
            <div className="containerWelcomen">
                <h1>No hay</h1>
            </div>
            }
        </div>


    )
}