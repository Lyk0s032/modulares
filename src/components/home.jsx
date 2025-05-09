import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';

export default function Home(props){
    const categories = props.categories; 
    const navigate = useNavigate();

    return (
        <div className='home'>
            <Helmet>
                <title>Modulares Costa - Centro mobiliario y más</title>
                <meta name="description" content="Descubre nuestra selección de muebles de oficina. Calidad, ergonomía y diseño para tu espacio de trabajo." />
                <meta property="og:title" content="Mobiliario de Oficina | Sillas, Escritorios y Más" />
                <meta property="og:description" content="Encuentra sillas ergonómicas, escritorios modernos y más para tu oficina ideal." />
                <meta property="og:image" content="https://www.modularescosta.co/assets/logoscosta-2-BDwFa4ZH.png" />
                <meta property="og:url" content="https://www.modularescosta.co/" />
            </Helmet>
            <div className='parallaxOne'>
                <div className="containerParallax">
                    <div className='boxWelcomen'>
                        
                        <div className='caption'>
                            <h1>
                                Mobiliario de oficina que combina estilo y comodidad
                            </h1>
                            <h2>Diseñado para tu productividad y bienestar</h2>
                            <span>
                            Transforma tu oficina con muebles ergonómicos y funcionales que se adaptan a tu espacio y necesidades. Encuentra escritorios, sillas y accesorios diseñados para brindar comodidad, eficiencia y un estilo profesional. ¡Optimiza tu entorno de trabajo con calidad y diseño!
                            </span>
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
                        <h2>Nuestro catálogo</h2>
                        <p>En COSTA, nos dedicamos a ofrecer productos de alta calidad para transformar y optimizar tus espacios.</p>
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
                                                    navigate(`services/${category.title}?sub=${category.subcategories[0].title}`)
                                                }else{
                                                    navigate(`services/${category.title}?`)

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
    

                            <div className="rightBox">
                                <div className="containerRigthImg">
                                    <div className="dark">
                                        <div className="textDesing">
                                            <h2>
                                                Asesoría Personalizada 
                                            </h2>
                                        
                                            <div className="textLong">
                                                <span> 
                                                    Transforma tu espacio de trabajo con nuestra asesoría
                                                    personalizada. Te ayudamos a crear un entorno que se
                                                    ajuste a tus necesidades y estilo, optimizando el espacio y
                                                    los materiales según tu presupuesto. Ofrecemos un diseño
                                                    moderno y eficiente, con un proceso que incluye consulta,
                                                    propuesta, producción y montaje. Contáctanos y haz
                                                    realidad tu espacio ideal. 
                                                    </span><br />
                                            </div>
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
