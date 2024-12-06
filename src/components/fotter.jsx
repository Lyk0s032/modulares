import React from 'react';

export default function Fotter(props){
    const categories = props.categories;
    return (
        <div className="fotter">
            <div className="fotterContainer">
                <div className="business">
                    <div className='logo'>
                        <img src="https://modularescosta.co/images/logo-whiteb.png" />
                    </div>
                    <div className='descAndNetwork'>
                        <span>
                            En Costa, diseñamos y fabricamos mobiliario especializado para oficina, áreas de trabajo colectivo,
                            priorizando la funcionalidad, el confort y el diseño personalizado. Ofrecemos soluciones integrales que facilitan el orden
                            y el almacenamiento eficiente, adaptadas a las necesidades especificas de cada cliente.
                        </span>


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