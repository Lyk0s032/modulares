import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Lockers(){
    const navigate = useNavigate();
    const move = () => {
        document.querySelector("#two").scrollIntoView({
            behavior:'smooth'
        })
    }
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="lockers">
            <div className="pageLockers">
                <div className='firstParallax'>
                    <div className='wallpaper'>
                        <div className='opacity'></div>
                    </div>
                    <div className='containerParallax'>
                        <div className='boxOne'>
                            <h3>Lockers y casilleros</h3>
                            <h1>Cada cosa en su lugar, y un lugar para cada cosa.</h1>
                            <span className='txt'>Pensamos en el orden, productividad y eficiencia de tu equipo</span>
                            <br />
                            <button onClick={()=>move()}>
                                <span>¡Me interesa!</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='twoParallax' id="two">
                    <div className='containerTwo'>
                        <div className='large' onClick={() => navigate('/product/1/')}>
                            <div className='wallpaperLarge Locker T3x9'>
                                <div className="opacity"></div>
                            </div>
                            <div className="boxData Opacity">
                                <div className="title">
                                    <h2>Casillero 3x9</h2>
                                    <strong>REF - 3 x 9</strong><br /><br />
                                    <span>
                                        Licker de 1.67 x .90 X .30 con 9 Servicios. Altura apróximada por servicio 0.52 CM.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='divideLarge'>
                            <div className='BoxDivide Locker T2x4' onClick={() => navigate('/product/1/')}>
                                <div className='title'>
                                    <h2>Lockers Metalico 2x4</h2>
                                    <span>REF - 2x4</span>
                                    <br /><br />
                                    <button>
                                        <span>Me interesa</span>
                                    </button>
                                </div>
                            </div>
                            <div className="BoxDivide Bottom Locker T2x8" onClick={() => navigate('/product/1/')}>
                                <div className='title'>
                                    <h2>Lockers Metalico 1x2</h2>
                                    <span>REF - 1x2</span>
                                    <br /><br />
                                    <button>
                                        <span>Me interesa</span>
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
                            <span>Alguno de nuestra linea de casilleros aquí</span>
                        </div>
                        <div className='lockers'>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1988147203_3x9-celosia-manija-gris.webp" alt="" />
                            </div>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1551881596_2x4-celosia-gris-1.webp" alt="" />
                            </div>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1988147203_3x9-celosia-manija-gris.webp" alt="" />
                            </div>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1551881596_2x4-celosia-gris-1.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='invitationToAction'>
                    <div className='bigText'>
                        <h1>Obtén lockers de alta calidad, con los mejores precios del mercado</h1>
                        <h3>
                            Cada cosa en su lugar, y un lugar para cada cosa
                        </h3>
                        <button>
                            <span>¡Me interesa!</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}