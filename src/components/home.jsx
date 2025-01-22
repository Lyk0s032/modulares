import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ergohuman from './../assets/sillas/presidencial/ergohuman/ergohuman.webp';
import delphi from './../assets/sillas/gerenciales/delphi.webp';
import canada from './../assets/sillas/gerenciales/canada.webp';
import ccngo from './../assets/sillas/gerenciales/ccngo.webp';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/actions/actions';
import Form from './contact';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

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
                            <h1>Explora nuestro sitio web y descubre como podemos transformar tus espacios en lugares que reflejen 
                                tu estilo y personalidad.
                            </h1>
                            <span>¡Visítanos y da el primer paso hacia el espacio que siempre has imaginado!</span>
                            <br />
                            <button style={{cursor:'pointer'}} onClick={() => {
                                document.querySelector("#categories").scrollIntoView({
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
            <div className='ourServices' id="categories">
                <div className='bigTitleOurServices'>
                    <div className='containerBigServices'>
                        <h1>Nuestro catálogo</h1>
                        <span>En COSTA, nos dedicamos a ofrecer productos de alta calidad para transpofrmar y optimizar tus espacios.</span>
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
                                            <div className={i+1 <= 4 && Number(i+1) % 2 === 0 ? 'servicio Big' : i+1 >= 5  ? 'servicio' : 'servicio'} ket={i+1} onClick={() => {
                                                if(category.subcategories && category.subcategories.length){
                                                    navigate(`services/${category.id}?sub=${category.subcategories[0].id}`)
                                                }else{
                                                    navigate(`services/${category.id}?`)

                                                }
                                            }}>
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
                <div className="OurSev" id="sv">
                    <div className="containerOurServices">

                        <div className="containerServicesDivide">
                            <div className="left">
                                <div className="containerLeft">
                                    <h1>
                                        Asesoría Personalizada y Sin Costo
                                    </h1>
                                    <span>
                                        Transforma tu espacio de trabajo con nuestra asesoría gratuita. <br />Nuestro equipo de expertos
                                        te guiarán en ese nuevo proyecto o en la remodelación de tu espacio, alineado a cada
                                        detalle con tus necesidades. Aprovecha esta oportunidad sin compromiso y creandoel espacio que 
                                        siempre has soñado.
                                    </span><br />

                                    <button onClick={() => {
                                        document.querySelector("#form").scrollIntoView({
                                            behavior:'smooth'
                                        })
                                    }} >
                                        <span>
                                            ¡Contactanos hoy!
                                        </span>
                                        <AiOutlineArrowRight />
                                    </button>
                                </div>
                            </div>

                            <div className="rightBox">
                                <div className="containerRight">
                                    <div className="boxSmall">
                                        <div className="">
                                            <h1>Consultoría</h1>
                                            <span>+ 25 años</span>
                                        </div>
                                    </div>
                                    <div className="boxSmall">
                                        <div className="">
                                            <h1>Proyectos</h1>
                                            <span>Oficina y Mobilliario</span>
                                        </div>
                                    </div>
                                    <div className="boxSmall">
                                        <div className="">
                                            <h1>Definir</h1>
                                            <span>Definir</span>
                                        </div>
                                    </div>
                                    <div className="boxSmall">
                                        <div className="">
                                            <h1>Definir </h1>
                                            <span>Definir</span>
                                        </div>
                                    </div>
                                </div>
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
