import React from 'react';
import UsImg from '../assets/site/team.png'
export default function Us(){
    return (
        <div className="us">
            <div className="containerUs">
                <div className="wallpaper">
                    <img src={UsImg} alt="" />
                </div>
                <div className="info">
                    <div className="title">
                        <h1>
                            ¿Quiénes somos?.
                        </h1>
                    </div>

                    <div className="data">
                        <h3>
                            Somos una empresa con más de 25 años de experiencia en el mercado,
                            brindando a nuestros clientes muebles de alta calidad, funcionales
                            y confortables a un precio altamente competitivo.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}