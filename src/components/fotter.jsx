import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { MdFacebook } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Metalica from './../assets/1.png'
import Logo from './../assets/logoscosta-2.png';
export default function Fotter(props){
    const categories = props.categories;
    const navigate = useNavigate();
    return (
        <div className="fotter">
            <div className="fotterContainer">
                <div className="business">
                    <div className='logo'>
                        {/* <img src={Logo} style={{width:200}} /> */}
                    </div>
                    <div className='descAndNetwork'>
                        <strong style={{color: 'white'}}>Horarios de atención</strong><br /><br />
                        <span style={{color: 'white'}}>
                            Lunes a Viernes de 8:00 am a 5:30pm <br />
                            Sábado 8:00am a 12:30pm <br /><br />
                            Sala de exhibición: Calle 11 # 13 - 15 San Pascual <br /><br />
                            Cel: 320 686 4572 
                        </span><br /><br />
                        <span style={{color: 'white'}}>Santiago de Cali</span><br />
                        <span style={{color: 'white'}} >Valle del Cauca</span><br /><br />

                        <span style={{color: 'white'}}>Colombia</span>




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
                                                    navigate(`/services/${category.title}`)
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
                        <h3>Visítanos</h3>
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