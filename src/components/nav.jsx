import React, { useEffect } from 'react';
import { IoReorderThreeSharp } from 'react-icons/io5';
import { MdReorder } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Nav(){
    const navigate = useNavigate();
    const openNav = () => {
        document.querySelector("#navi").classList.toggle('navigationsOptionsActive');
    }
    window.addEventListener("scroll", function(){
        let nav = this.document.querySelector("#navigation");
        nav.classList.toggle('navigationActive', window.scrollY>0)
    })


    return (
        <div className='navigation' id="navigation">
            <div className='containerNav'>
                <div className='logo' onClick={() => navigate('/')}>
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
                            <li onClick={() => {
                                navigate('/')                                
                                openNav();
                            }} >
                                <div>
                                    <span>Inicio</span>
                                </div>
                            </li>
                            <li onClick={() => {
                                document.querySelector("#services").scrollIntoView({
                                    behavior:'smooth'
                                })
                            }}>
                                <div>
                                    <span>Categorías</span>
                                </div>
                            </li>
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