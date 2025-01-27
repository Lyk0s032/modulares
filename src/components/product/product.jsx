import React, { useEffect, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import * as actions from './..//store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Loading from '../loading';
import NotFound from '../notFound';


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

    const sendMessage = () => {
        let numero = '573206864572'
        const mensaje = encodeURIComponent("Hola, estoy interesado/a en conocer más");
        const enlace = `https://wa.me/${numero}?text=${mensaje}`;
        window.open(enlace, "_blank");
    }
    return (
        !product || loading ?
            <Loading />
        :
        product == 404 || product == 'request' ?
            <NotFound />
        :
        <div className='product'>

            <div className='containerProduct'>
                <div className='containerProductsCar'>
                    <div className='containerCars'>

                        <Slider producto={product} /> 
                        <div className="car">
                            <div className="containerCar">
                                <div className="header">
                                    <h1>{product.name}</h1>
                                    <h3>{product.referencia} <span>REF</span></h3>
                                </div>
                                <div className='desc'>

                                    <strong>Descripción</strong><br /><br />
                                    <span>
                                        {product.description.replace(/\\n/g, "\n")}
                                    </span>
                                    
                                </div>
                                <div className="buttonAction">
                                    <button className='action' onClick={() => sendMessage()}
                                        style={{cursor:'pointer'}}>
                                        <BsWhatsapp className='icon' />
                                        <span>
                                            Más información
                                        </span>
                                    </button>
                                    <button className='others' onClick={() => {
                                        document.querySelector("#other").scrollIntoView({
                                            behavior:'smooth'
                                        })
                                    }} style={{cursor:'pointer'}}>
                                        <span>
                                            Productos similares
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='otherCasilleros' id="other">
                    <div className="containerOther">
                        <div className='titleLockers'>
                            <h1>Otros productos</h1>
                            <span>Conoce más sobre nuestra linea de {product.category.title} </span>
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
        </div>
    )
}

function Slider(props){
    const product = props.producto;
    const [photo, setPhoto] = useState(product.photo)

    useEffect(() => {
        setPhoto(product.photo)
    }, [product])
    return (
        <div className='wallpaper'>
            <div className="imgBig">
                <img src={photo} alt="" />
            </div>
            <div className="sliderImages"> 
                <div className="containerSlide">
                    <img className={product.photo == photo ? 'Active' : null} src={product.photo} 
                                    onClick={() => {
                                        setPhoto(product.photo)
                                    }}/>
                    {
                        product.media && product.media.length ? 
                            product.media.map((m,i) => {
                                return (
                                    <img key={i+1} src={m.url} 
                                    onClick={() => {
                                        setPhoto(m.url)
                                    }} className={m.url == photo ? 'Active' : null}/>
                                )
                            })
                        : null
                    }
                </div>
            </div>
        </div>
    )
}