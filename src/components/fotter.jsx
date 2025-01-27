import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { MdFacebook } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Logo from './../assets/logoscosta-2.png';
import Metalica from './../assets/1.png'
export default function Fotter(props){
    const categories = props.categories;
    const navigate = useNavigate();
    return (
        <div className="fotter">
            <div className="fotterContainer">
                <div className="business">
                    <div className='logo'>
                        <img src={Logo} style={{width:100}} />
                    </div>
                    <div className='descAndNetwork'>
                        <strong style={{color: 'white', width:100}}>Horarios de atención</strong><br /><br />
                        <span style={{color: 'white'}}>
                            Lunes a Viernes de 8am a 5:30pm <br />
                            Sábado 8am a 12:30pm <br />
                            (602) 373 9940 <br />
                            320 686 4572 ( por definir)
                        </span><br /><br />
                        <span>Cali - Colombia</span>




                    </div>
                </div>
                <div className='boxNav'>
                    <div className='title'>
                        <h3>Nuestros sitios</h3>
                    </div>
                    <div className='containerNav'>
                        <nav>
                            <ul>
                                {
                                    categories && categories.length ?
                                        categories.map((category, i) => {
                                            return (
                                                <li key={i+1} onClick={() => {
                                                    navigate(`/services/${category.id}`)
                                                }}>
                                                    <span>{category.title}</span>
                                                </li>
                                            )
                                        })
                                    :null
                                }
                                <li onClick={() => navigate('/legal/tratamientoDatos')}>
                                    <span>Tratamiento de datos</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='boxNav'>
                    <div className='title'>
                        <h3>Visitanos</h3>
                    </div>
                    <div className='containerNav'>
                        <nav>
                            <ul>
                                <li className='social'>
                                    <li onClick={() => {
                                        window.open('https://www.facebook.com/Modularescosta.co/', '_target')
                                    }}>
                                       <MdFacebook className='icon Fb' />
                                    </li>
                                    <li onClick={() => {
                                        window.open('https://www.instagram.com/costacenter/', '_target');
                                    }}>
                                       <FaSquareInstagram className='icon' />
                                    </li>

                                </li>
                                <li onClick={() => {
                                    window.open('https://metalicascosta.com.co', '_blank')
                                }}>
                                    <img src={Metalica} alt="" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='smallMessage'>
                <span>Costa - Derechos reservados</span>
            </div>
        </div>
    )
}
