import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import NewProduct from './modales/newProduct';
import EditProduct from './modales/editProduct';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../store/actions/actions';
import UpdatePhoto from './modales/uploadPhoto';
import NewSub from './modales/newSub';

export default function Category(){
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const category = useSelector(store => store.category);
    const loading = useSelector(store => store.loadingCategory);

    const { nameCat } = useParams();
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
    console.log(nameCat)
    useEffect(() => {
        if(category && category.id && nameCat == category.id){
        }else{
            dispatch(actions.axiosGetCategory(true, nameCat))
        }
    }, [nameCat])
    return (
        loading || !category ? 
            <div className="loading">
                <h1>Cargando</h1>
            </div>
        : !category || category == 404 || category == 'requiest' ?
            <div className="loading">
                <h1>Not found</h1>
            </div>
        :
        <div className="welcomen">
            {
                params.get('w') == 'edit' ?
                    <EditProduct category={category} />
                : params.get('w') == 'new' ?
                    <NewSub category={category} />
                : params.get('w') == 'photos' ? 
                    <UpdatePhoto category={category} />
                : null
            }

            
            <div className="containerWelcomen">
                <button className='back' onClick={() => navigate('/panel')}>
                    <MdArrowBack className="icon" />
                    <span>Regresar</span>
                </button><br /><br />
                <span className='pseudo'>Categoría {nameCat}</span><br /><br />
                <div className="topMessage">
                    <h1>¡{category.title}!</h1>
                    <span>{category.bigDescription}.</span>
                </div>
                <div className="categories">
                    <div className="topTitle">
                        <h1> SubCategorias ({category.subcategories && category.subcategories.length ? category.subcategories.length : 0})</h1>
                        <button  onClick={() => createProduct()}>
                            <span>+ Nueva subCategoría</span>
                        </button>
                    </div>
                </div> 
                <div className="subCate">
                    <nav>
                        <ul>
                            {
                                category.subcategories && category.subcategories.length ?
                                    category.subcategories.map((sub, i) => {
                                        return (
                                            <li key={i+1} onClick={() => navigate(`${sub.id}`)}>
                                                <div className="">

                                                <span>{sub.title} ({sub.products? sub.products.length : 0})</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                :null
                            }
                        </ul>
                    </nav>
                </div>
                
            </div>

            
        </div>


    )
}