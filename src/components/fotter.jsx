import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Fotter(props){
    const categories = props.categories;
    const navigate = useNavigate();
    return (
        <div className="fotter">
            <div className="fotterContainer">
                <div className="business">
                    <div className='logo'>
                        <img src="https://modularescosta.co/images/logo-whiteb.png" />
                    </div>
                    <div className='descAndNetwork'>
                        <strong style={{color: 'white'}}>Horarios de atención</strong><br /><br />
                        <span style={{color: 'white'}}>
                            Lunes a Viernes de 8am a 5:30pm <br />
                            Sábado 8am a 12:30pm <br />
                            (602) 373 9940 <br />
                            (602) 373 9940 <br />
                            320 686 4572 ( por definir)
                        </span><br />




                    </div>
                </div>
                <div className='boxNav'>
                    <div className='title'>
                        <h3>Nuestros servicios</h3>
                    </div>
                    <div className='containerNav'>
                        <nav>
                            <ul>
                                {
                                    categories && categories.length ?
                                        categories.map((category, i) => {
                                            return (
                                                <li key={i+1}>
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
                                <li>
                                    <span>Facebook</span>
                                </li>
                                <li>
                                    <span>Instagram</span>
                                </li>
                                <li>
                                    <span>X</span>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='smallMessage'>
                <span>Modulares Costa - Derechos reservados</span>
            </div>
        </div>
    )
}