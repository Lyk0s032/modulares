import React, { useEffect } from 'react';
import { IoReorderThreeSharp } from 'react-icons/io5';
import { MdReorder } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Nav(){
    const navigate = useNavigate();
    const openNav = () => {
        document.querySelector("#navi").classList.toggle('navigationsOptionsActive');
    }
    window.addEventListener("scroll", function(){
        let nav = this.document.querySelector("#navigation");
        nav.classList.toggle('navigationActive', window.scrollY>0)
    })


    const { pathname } = useLocation();


    return (
        <div className='navigation' id="navigation">
            {console.log(pathname)}
            <div className='containerNav'>
                <div className='logo' onClick={() => {
                    navigate('/')                                
                    openNav();
                }}>
                    <img src="https://metalicascosta.com.co/assets/img/logo_metalicas_costa.png" alt="" />
                </div>
                <div className='navigationOptions' id="navi">
                    <nav>
                        <ul>
                            <li>
                                <input type="text" placeholder="Buscar" />
                            </li>
                            <li onClick={() => {
                                navigate('/panel/')
                                openNav();
                            }}>
                                <div>
                                    <span>Panel</span>
                                </div>
                            </li>
                            {
                                pathname == '/' ?
                                <li onClick={() => {
                                    document.querySelector("#categories").scrollIntoView({
                                        behavior:'smooth'
                                    })
                                    openNav();

                                }}>
                                    <div>
                                        <span>Categorias</span>
                                    </div>
                                </li>
                                :
                                <li onClick={() => {
                                    navigate('/')
                                    openNav();
                                    
                                }
                                
                                }>
                                    <div>
                                        <span>Categorias</span>
                                    </div>
                                </li>
                            }
                            {
                                pathname == '/' ?
                                <li onClick={() => {
                                    document.querySelector("#sv").scrollIntoView({
                                        behavior:'smooth'
                                    })
                                    openNav();

                                }}>
                                    <div>
                                        <span>Servicios</span>
                                    </div>
                                </li>
                                :
                                <li onClick={() => {
                                    navigate('/')
                                    openNav();
                                    
                                    }}>
                                    <div>
                                        <span>Servicios</span>
                                    </div>
                                </li>
                            }

                            <li onClick={() => {
                                navigate('/our');
                                openNav()
                            }}>
                                <div className="">
                                    <span>
                                        Oferta de valor
                                    </span>
                                </div>
                            </li>
                            <li onClick={() => {
                                navigate('/nosotros');
                                openNav();

                            }}>
                                <div className="">
                                    <span>
                                        Nosotros
                                    </span>
                                </div>
                            </li>
                            <li onClick={() => {
                                navigate('/proyectos/')
                                openNav();
                                
                            }}>
                                <div className="">
                                    <span>Proyectos</span>
                                </div>
                            </li>

                        </ul>
                        
                    </nav>
                    
                </div>
                <div className="div">
                    <button onClick={() => openNav()}>
                        <MdReorder className="icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}