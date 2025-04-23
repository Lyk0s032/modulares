import React, { useEffect } from 'react';
import * as actions from './../store/actions/actions';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading';

export default function SubCategory(props){
    const [params, setParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const category = props.category;

    const sub = useSelector(store => store.sub);
    const loading = useSelector(store => store.loadingSub);

    const searchByOrder = category.subcategories;
    console.log(searchByOrder)
    useEffect(() => {
        if(params.get('sub')){
            dispatch(actions.axiosGetSubCategory(true, category.id, params.get('sub')))
        }else{
            console.log(category)
            category && category.subcategories && category.subcategories.length ? params.set('sub', category.subcategories[0].title) : null
            setParams(params);
        }

    }, [params.get('sub')])

    console.log(sub)
    return ( 
        loading || !sub ?
            <Loading />
        :
        <div className="containerListsProducts">

        {
            sub.products && sub.products.length ?
                sub.products.map((productito, i) => {
                    return (
                        <article className="productico" key={i+1} onClick={() => navigate(`/product/${productito.id}`)}>
                            <div className="hidden">
                                <button>
                                    <span>Cotizar ahora</span>
                                </button>
                                <div className="bottom">
                                    <h1>{productito.name}</h1>
                                </div>
                            </div>
                            <img src={productito.photo} alt="" />
                        </article>
                    )
                })
            :

            <div className="notProducts">
                <h1>No hay productos por el momento</h1>
            </div>
        }
    </div>
    )
}