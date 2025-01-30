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
    useEffect(() => {
        dispatch(actions.axiosGetSubCategory(true, searchByOrder[0].id, params.get('sub')))
        console.log('entra')
    }, [params.get('sub')])

    return (
        loading || !sub ?
            <Loading />
        :
        <div className="containerListsProducts">

        {
            sub.products && sub.products.length ?
                sub.products.map((productito, i) => {
                    return (
                        <div className="productico" key={i+1} onClick={() => navigate(`/product/${productito.id}`)}>
                            <div className="hidden">
                                <h1>{productito.name}</h1>
                            </div>
                            <img src={productito.photo} alt="" />
                        </div>
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