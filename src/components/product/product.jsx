import React, { useEffect } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import * as actions from './..//store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
export default function Product(){
    const dispatch = useDispatch();
    const product = useSelector(store => store.product);
    const loading = useSelector(store => store.loadingProduct);
    const { producto } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0,0)
        if(!product || product && product.id != producto){
            dispatch(actions.axiosGetProduct(true, producto))
        }
    }, [producto])
    return (
        <div className='product'>
            {console.log(product)}
            {
                !product || loading?
                <div className="containerPro">
                    <h1>Cargando</h1>
                </div>
                :
            <div className='containerProduct'>
                <div className='containerProductsCar'>
                    <div className='containerCars'>

                        <div className='wallpaper'>
                                <img src={product.photo} alt="" />
                            </div>
                        <div className="car">
                            <div className="containerCar">
                                <div className="header">
                                    <h1>{product.name}</h1>
                                    <h3>{product.referencia} <span>REF</span></h3>
                                </div>
                                <div className='desc'>
                                    <button>
                                        <span>Disponible</span>
                                    </button><br />
                                    <strong>Descripción</strong><br /><br />
                                    <span>
                                        {product.description}
                                    </span>
                                    
                                </div>
                                <div className="buttonAction">
                                    <button className='action'>
                                        <BsWhatsapp className='icon' />
                                        <span>
                                            Más información
                                        </span>
                                    </button>
                                    <button className='others'>
                                        <span>
                                            Productos similares
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='otherCasilleros'>
                    <div className="containerOther">
                        <div className='titleLockers'>
                            <h1>Otros productos</h1>
                            <span>Visita nuestra linea de Lockers </span>
                        </div>
                        <div className='lockers'>
                            {
                                product.category && product.category.products && product.category.products.length ?
                                    product.category.products.map((pr, i) => {
                                        return (
                                            pr.id != product.id ?
                                                <div className="locker" onClick={() => navigate(`/product/${pr.id}`)}>
                                                    <div className="opacityDiv"></div>
                                                    <img src={pr.photo} alt="" />
                                                    <div className="desc">
                                                        <h3>{pr.name}</h3>
                                                        <span>{pr.referencia} </span>
                                                    </div>
                                                </div>
                                            :null
                                        )
                                    })
                                :null
                            }
                            
                
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}