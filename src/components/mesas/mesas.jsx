import React, { useEffect } from 'react';
import ergohuman from './../../assets/sillas/presidencial/ergohuman/ergohuman.webp';
import delphi from './../../assets/sillas/gerenciales/delphi.webp';
import canada from './../../assets/sillas/gerenciales/canada.webp';
import ccngo from './../../assets/sillas/gerenciales/ccngo.webp';
import { useNavigate } from 'react-router-dom';

export default function Mesas(){
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
                    <div className='wallpaper Mesas'>
                        <div className='opacity'></div>
                    </div>
                    <div className='containerParallax'>
                        <div className='boxOne'>
                            <h3>Mesas de juntas</h3>
                            <h1>Transforma tus reuniones con nuestro catalogo elegante y funcional.</h1>
                            <span className='txt'>Tomemos decisiones que nos lleven a actuar, no a pensar en actuar.</span>
                            <br />
                            <button onClick={() => move()}>
                                <span>¡Me interesa!</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='twoParallax' id="two">
                    <div className='containerTwo'>
                        <div className='large' onClick={() => navigate('/product/1/')}>
                            <div className='wallpaperLarge MesaJuntas'>
                                <div className="opacity"></div>
                            </div>
                            <div className="boxData Opacity">
                                <div className="title">
                                    <h2>Mesa juntas 2</h2>
                                    <strong>REF - Mesa 2</strong><br /><br />
                                    <span>
                                        Mesa de juntas con diseño moderno y 
                                        sofisticado en combinaciones de madera enchapada en formica...
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='divideLarge'>
                            <div className='BoxDivide MesaJuntas3' onClick={() => navigate('/product/1/')}>
                                <div className="opacity"></div>
                                <div className='title'>
                                    <h2>MESA DE JUNTAS 3</h2>
                                    <span>REF - Mesa 3</span>
                                    <br /><br />
                                    <button>
                                        <span>Me interesa</span>
                                    </button>
                                </div>
                            </div>
                            <div className="BoxDivide Bottom MesaJuntas4" onClick={() => navigate('/product/1/')}>
                            <div className="opacity"></div>
                            <div className='title'>
                                    <h2>MESA DE JUNTAS 4</h2>
                                    <span>REF - Mesa 4</span>
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
                            <h1>Más para ti</h1>
                            <span>Alguno de nuestra linea de casilleros aquí</span>
                        </div>
                        <div className='lockers'>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src={ergohuman} alt="" />

                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src={delphi} alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src={canada} alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker" onClick={() => navigate('/product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src={ccngo} alt="" />
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
                        <h1>Obtén diversidad de mesas de alta calidad, con los mejores precios del mercado</h1>
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