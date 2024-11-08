import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Archivo(){
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
                    <div className='wallpaper Archivos'>
                        <div className='opacity'></div>
                    </div>
                    <div className='containerParallax'>
                        <div className='boxOne'>
                            <h3>Sistemas de archivo rodante</h3>
                            <h1>Cada cosa en su lugar, y un lugar para cada cosa.</h1>
                            <span className='txt'>Organiza tu información con nuestros sistemas de archivo. Eficiencia, estilo y capacidad adaptada a tus necesidades.</span>
                            <br />
                            <button onClick={() => move()}>
                                <span>¡Me interesa!</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='twoParallax' id="two">
                    <div className='containerTwo'>
                        <div className='large Border' onClick={() => navigate('/product/1/')}>
                            <div className='wallpaperLarge Archivo Doble'>
                                <div className="opacity"></div>
                            </div>
                            <div className="boxData Opacity">
                                <div className="title">
                                    <h2>Archivo Rodante Roble</h2>
                                    <strong>REF - ARCHIVO RODANTE 02</strong><br />
                                    <span>
                                        Archivo rodante mécanico sencillo, doble, triple cuatruple y quintuple.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='divideLarge'>
                            <div className='BoxDivide Archivo Triple' onClick={() => navigate('/product/1/')}>
                                <div className="opacity"></div>
                                <div className='title'>
                                    <h2>Archivo Rodante Doble</h2>
                                    <span>REF - 1x2</span>
                                    <br /><br />
                                    <button>
                                        <span>Me interesa</span>
                                    </button>
                                </div>
                            </div>
                            <div className="BoxDivide Bottom Archivo Sencillo" onClick={() => navigate('/product/1/')}>
                                <div className="opacity"></div>
                                <div className='title'>
                                    <h2>Archivo Rodante sencillo</h2>
                                    <span>REF - Archivo Rondante 05</span>
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
                            <span>Visita nuestra linea de Lockers </span>
                        </div>
                        <div className='lockers'>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1988147203_3x9-celosia-manija-gris.webp" alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1551881596_2x4-celosia-gris-1.webp" alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1988147203_3x9-celosia-manija-gris.webp" alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1551881596_2x4-celosia-gris-1.webp" alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
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