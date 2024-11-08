import React from 'react';
import { useNavigate } from 'react-router-dom';
import ergohuman from './../assets/sillas/presidencial/ergohuman/ergohuman.webp';
import delphi from './../assets/sillas/gerenciales/delphi.webp';
import canada from './../assets/sillas/gerenciales/canada.webp';
import ccngo from './../assets/sillas/gerenciales/ccngo.webp';

export default function Home(){
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div className='parallaxOne'>
                <div className="containerParallax">
                    <div className='boxWelcomen'>
                        <h3>Modulares costa</h3>
                        
                        <div className='caption'>
                            <h1>Más de 25 años óptimizando espacios. Cumpliendo sueños.</h1>
                            <span>Contruyendo espacios, materializando sueños.</span>
                            <br />
                            <button style={{cursor:'pointer'}} onClick={() => {
                                document.querySelector("#services").scrollIntoView({
                                    behavior:'smooth'
                                })
                            }}>
                                <span>
                                    ¡Me interesa!
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ourServices' id="services">
                <div className='bigTitleOurServices'>
                    <div className='containerBigServices'>
                        <h1>Nuestros servicios</h1>
                        <span>Conoce nuestra variedad de productos y servicios</span>
                    </div>
                    <div className='box-services'>
                        <div className='containerBox'>
                            <div className='box'>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerParallax">
                    <div className="serviceOption">
                        <div className="contenedorDeServicios">
                            <div className="horizontal">
                                <div className="servicio" onClick={() => navigate('services/sillas')}>
                                    <div className="containerServicio">
                                        <div className="wallpaper">
                                            <img src="https://th.bing.com/th/id/R.ef5b4f0ce88977129543063aee2c123b?rik=JqjrIJXFHdYktQ&pid=ImgRaw&r=0" alt="" />
                                        </div>
                                        <div className="title">
                                            <h3>Sillas</h3>
                                            <span>Comodidad y confort</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="servicio Big" onClick={() => navigate('services/mesas')}>
                                    <div className="containerServicio">
                                        <div className="wallpaper">
                                            <img src="https://th.bing.com/th/id/OIP.wGOTSg4v-H_WcXrv4nafngHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain" alt="" />
                                        </div>
                                        <div className="title">
                                            <h3>Mesas de juntas</h3>
                                            <span>Tomá decisiones de calidad.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="servicio" onClick={() => navigate('services/lockers')}>
                                    <div className="containerServicio">
                                        <div className="wallpaper">
                                            <img src="https://th.bing.com/th/id/OIP.NNXaTLpMv54VlM72JgVMmAHaFJ?rs=1&pid=ImgDetMain" alt="" />
                                        </div>
                                        <div className="title">
                                            <h3>Lockers</h3>
                                            <span>Centro del orden</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containerParallax'>
                    <div className='serviceOption'>

                        <div className='containerService'>
                            <div className='service'>
                                <div className='wallpaper'>
                                    <img src="https://th.bing.com/th/id/R.69f9429eaebe8e254deebce1861c71ac?rik=Qna6VfQW%2bhBC3Q&riu=http%3a%2f%2farchimovil.com%2fInicio_files%2fshapeimage_18.png&ehk=yIYGkVJgGBIthKS%2fP7gGSNaVsS1BLlSButyotaDBUDU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />

                                </div>
                                <div className='desc'>
                                    <div className='containerDesc'>
                                        <button className='tag'>Productividad y Orden</button>
                                        <h1>Sistema de Archivos</h1>
                                        <h3>
                                            Organiza tu oficina con nuestros sistemas de archivos: eficiencia, estilo y capacidad adaptada a tus necesidades. <br /><br />
                                            <strong>Cada cosa en su lugar, y un lugar para cada cosa.</strong>
                                        </h3>
 
                                        <button  style={{cursor:'pointer'}} className='go' onClick={() => navigate('services/archivo')}>
                                            <span>Conocer</span> 
                                        </button>
                                    </div>
                                </div>
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
                            <div className="locker" onClick={() => navigate('product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src={ergohuman} alt="" />

                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker" onClick={() => navigate('product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src={delphi} alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker" onClick={() => navigate('product/1/')}>
                                <div className="opacityDiv"></div>
                                <img src={canada} alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker" onClick={() => navigate('product/1/')}>
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
            <div className='ourExperience'>
                <div className='containerExperience'>
                    <div className='bigText'>
                        <h1>Nuestra experiencia</h1>
                        <h3>Más de 2 decadas, creando experiencias innovidables para nuestros clientes y colaboradores.</h3>
                    </div>
                    <div className='containerBoxExperience'>
                        <div className='box'>
                            <h1>+ 25 años</h1>
                            <h3>Experiencia</h3>
                        </div>
                        <div className='box'>
                            <h1>+ 90%</h1>
                            <h3>Continua elegiendonos</h3>
                        </div>
                        <div className='box'>
                            <h1>+ 1.000</h1>
                            <h3>Proyectos entregados</h3>
                        </div>
                        <div className='box'>
                            <h1>+ 1.500 </h1>
                            <h3>Clientes satisfechos</h3>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}
