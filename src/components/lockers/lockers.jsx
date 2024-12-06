import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as actions from './../store/actions/actions';

export default function Lockers(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cid } = useParams();
    const category = useSelector(store => store.category);
    const loading = useSelector(store => store.loadingCategory);
    const move = () => {
        document.querySelector("#two").scrollIntoView({
            behavior:'smooth'
        })
    }
    useEffect(() => {
        dispatch(actions.axiosGetCategory(true, cid))
    }, [cid])
    return (
        <div className="lockers">
            {
                category && loading ?
                    <div className="pageLockers">
                        <h1>Cargando...</h1>
                    </div>
                : 
                category == 'request' || category == 404 || !category ?
                    <div className="pageLockers">
                        <h1>No found...</h1>
                    </div>
                :
            <div className="pageLockers">
                <div className='firstParallax'>
                    <div className='wallpaper' style={{
                        background: `url('${category.wallpaper}')`
                    }}>
                        <div className='opacity'></div>
                    </div>
                    <div className='containerParallax'>
                        <div className='boxOne'>
                            <h3>{category.title}</h3>
                            <h1>{category.bigTitle}</h1>
                            <span className='txt'>{category.smallDescription}</span>
                            <br />
                            <button onClick={()=>move()}>
                                <span>¡Me interesa!</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='twoParallax' id="two">
                    <div className='containerTwo'>
                        {
                            category.products && category.products.length ?
                                category.products.map((product, i) => {
                                    return (
                                        i+1 == 1 ? 
                                            <div className='large' onClick={() => navigate(`/product/${product.id}`)}>
                                                <div className='wallpaperLarge' style={{
                                                    background: `url('${product.photo}')`,
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat:'no-repeat'
                                                }}>
                                                    <div className="opacity"></div>
                                                </div>
                                                <div className="boxData Opacity">
                                                    <div className="title">
                                                        <h2>{product.name}</h2>
                                                        <strong>{product.referencia}</strong><br /><br />
                                                        <span>
                                                            {product.description}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            :null

                                    )
                                })
                            : <span>Sin productos</span>
                        }

                        <div className='divideLarge'>
                            {
                                category.products && category.products.length ?
                                    category.products.map((product, i) => {
                                        return (
                                            i+1 > 1 && i+1 < 4 ? 
                                            <div className='BoxDivide' style={{
                                                background: `url('${product.photo}')`,
                                                backgroundSize: 'contain',
                                                backgroundRepeat:'no-repeat',
                                                backgroundPosition: 'right'
                                            }} onClick={() => navigate('/product/1/')}>
                                                <div className='title'>
                                                    <h2>{product.name}</h2>
                                                    <span>{product.referencia}</span>
                                                    <br /><br />
                                                    <button>
                                                        <span>Me interesa</span>
                                                    </button>
                                                </div>
                                            </div>    
                                            :null

                                        )
                                    })
                                : <span>Sin productos</span>
                            }

                            
                            
                        </div>
                    </div>
                </div>
                <div className='otherCasilleros'>
                    <div className="containerOther">
                        <div className='titleLockers'>
                            <h1>Otros productos</h1>
                            <span>Alguno de nuestra linea de casilleros aquí</span>
                        </div>
                        <div className='lockers'>
                        {
                                category.products && category.products.length ?
                                    category.products.map((product, i) => {
                                        return (
                                            i+1 > 3 ? 
                                            <div className="locker" onClick={() => navigate(`/product/${product.id}`)}>
                                                <div className="opacityDiv"></div>
                                                <img src={product.photo} alt="" />
                                                <div className="desc">
                                                    <h3>{product.name}</h3>
                                                    <span>{product.referencia} </span>
                                                </div>
                                            </div>
                                            : null
                                        )
                                    })
                                : <span>Sin productos</span>
                            }
                        </div>
                    </div>
                </div>

                <div className='invitationToAction'>
                    <div className='bigText'>
                        <h1>Obtén {category.title} de alta calidad, con los mejores precios del mercado</h1>
                        <h3>
                            {category.smallDescription}
                        </h3>
                        <button onClick={() => move()}>
                            <span>¡Me interesa!</span>
                        </button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}