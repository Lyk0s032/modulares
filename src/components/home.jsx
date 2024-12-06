import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ergohuman from './../assets/sillas/presidencial/ergohuman/ergohuman.webp';
import delphi from './../assets/sillas/gerenciales/delphi.webp';
import canada from './../assets/sillas/gerenciales/canada.webp';
import ccngo from './../assets/sillas/gerenciales/ccngo.webp';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/actions/actions';
import Form from './contact';

export default function Home(props){
    const categories = props.categories;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(actions.axiosGetCategories(true));
    }, [])
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

                            {
                                categories && categories.length ?
                                    categories.map((category, i) => {
                                        return (
                                            <div className={i+1 <= 4 && Number(i+1) % 2 === 0 ? 'servicio Big' : i+1 >= 5  ? 'servicio' : 'servicio'} ket={i+1} onClick={() => navigate(`services/${category.title}`)}>
                                                <div className="containerServicio">
                                                    <div className="wallpaper">
                                                        <img src={category.wallpaper} alt="" />
                                                    </div>
                                                    <div className="title">
                                                        <h3>{category.title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                : null
                            }
                                
                                
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

            <Form />
        </div>

    )
}
