import React from 'react';
import ListsProyects from './listProyects';

export default function PanelProyects(){
    return (
        <div className="proyects">
            <div className="containerProyects">
                <div className="parallaxOneProyectos">
                    <div className="containerPara">
                        <div className="">
                            <h1>Casos de éxito asesorando empresas de todos los sectores económicos.</h1>
                            <span>Conoce lo que dicen nuestros clientes</span>
                            <br /><br />
                            <button onClick={() => {
                                document.querySelector("#projects").scrollIntoView({
                                    behavior:'smooth'
                                })
                            }}>
                                <span>¡Tengo curiosidad!</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="ourClients">
                    <ListsProyects />
                </div>
            </div>
        </div>
    )
}