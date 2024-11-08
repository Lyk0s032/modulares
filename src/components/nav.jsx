import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nav(){
    const navigate = useNavigate();

    useEffect(() => {
        if(window.scrollX > 0){
            document.querySelector("#navigation").classList.toggle('navigation Active');
        }
    })
    return (
        <div className='navigation' vid="navigation">
            <div className='containerNav'>
                <div className='logo' onClick={() => navigate('/')}>
                    <img src="https://metalicascosta.com.co/assets/img/logo_metalicas_costa.png" alt="" />
                </div>
                <div className='navigationOptions'>
                    <nav>
                        <ul>
                            <li onClick={() => navigate('/')}>
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
                                    <span>Servicios</span>
                                </div>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}