import React from 'react';

export default function Form(){
    return (
        <div className="forma" id="form">
            <div className="containerForm">
                <div className="top">
                    <h1>Contactanos</h1>
                    <span>Nuestro equipo de asesores se comunicará contigo de inmediato.</span>
                </div>
                <div className="formData">
                    <div className="inputDiv">
                        <label htmlFor="">
                            Nombre:
                        </label><br />
                        <input type="text" placeholder='Ingresa tu nombre' />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">
                            Teléfono:
                        </label><br />
                        <input type="text" placeholder='Ingresa tu teléfono' />
                    </div>
                    <div className="inputDiv">
                        <button>
                            <span>Contactar</span>
                        </button>
                    </div>

                    <span>
                        Al enviar formulario, aceptas los términos y condiciones.
                    </span>
                </div>
            </div>
        </div>
    )
}