import React from 'react';
import ergohuman from './../../assets/sillas/presidencial/ergohuman/ergohuman.webp';
import delphi from './../../assets/sillas/gerenciales/delphi.webp';
import canada from './../../assets/sillas/gerenciales/canada.webp';
import ccngo from './../../assets/sillas/gerenciales/ccngo.webp';
import { useNavigate } from 'react-router-dom';

export default function Sillas(){
    const navigate = useNavigate();
    
    const move = () => {
        document.querySelector("#two").scrollIntoView({
            behavior:'smooth'
        })
    }
    return (
        <div className="lockers">
            <div className="pageLockers">
                <div className='firstParallax'>
                    <div className='wallpaper Silla'>
                        <div className='opacity'></div>
                    </div>
                    <div className='containerParallax'>
                        <div className='boxOne'>
                            <h3>Sillas para ti, y tu equipo</h3>
                            <h1>Pensamos en la comodidad, salud </h1>
                            <span className='txt'>Confort y la productividad tuya y de tu equipo.</span>
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
                            <div className='wallpaperLarge Silla Singapur'></div>
                            <div className="boxData">
                                <div className="title">
                                    <h2>Silla Singapur</h2>
                                    <strong>REF - MC 3-1065</strong><br />
                                    <span>
                                        Silla Singapur - Silla Ergonómica Presidencial
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='divideLarge'>
                            <div className='BoxDivide Silla Lujo' onClick={() => navigate('/product/1/')}>
                                <div className='title'>
                                    <h2>Silla Monaco Lujo</h2>
                                    <span>REF - MC 3-799</span>
                                    <br /><br />
                                    <button>
                                        <span>Me interesa</span>
                                    </button>
                                </div>
                            </div>
                            <div className="BoxDivide Bottom Silla Play" onClick={() => navigate('/product/1/')}>
                                <div className='title'>
                                    <h2>Silla Play - Ergonómica</h2>
                                    <span>REF - MC 3-1346</span>
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
                        <h1>Obtén Sillas de alta calidad, con los mejores precios del mercado</h1>
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