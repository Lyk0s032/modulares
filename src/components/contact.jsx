import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form(){
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nombre: null,
        phone: null,
        email: null
    })
    const [loading, setLoading] = useState(false);
    const [mistake, setMistake] = useState(null);
    const [positive, setPositive] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

    const addProspecto = async () => {
        if(loading) return null;
        if(!form.nombre || !form.phone || !form.email) return setMistake('Por favor, llena los campos');
        if(!isChecked) return setMistake('Debes aceptar nuestras políticas, términos y condiciones. ');

        // Caso contrario
        setLoading(true)
        let body = {
            namePersona: form.nombre,
            phone: form.phone,
            email: form.email,
            type: 'digital',
            fuenteId: 10
        }
        const sendCreate = await axios.post('https://comercialapi-production.up.railway.app/api/prospecto/create', body)
        .then((res) => {
            console.log(res);
            setLoading(false);
            setPositive(true);

            const event = new CustomEvent('gtm_event', {
                detail: {
                    event: 'form_submission'
                }
            });
            window.dispatchEvent(event); 
            return true
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
            return null;
        });

        return sendCreate;
    }

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <div className="forma" id="form">
        {
            positive ?
            <div className="containerForm">
                <div className="c">
                    <h1>¡Gracias!</h1>
                    <span>Uno de nuestros asesores se comunicará contigo a la brevedad posible.</span>
                </div>
            </div>
            : 
            <div className="containerForm">
                <div className="top">
                    <h1>Contáctanos</h1>
                    <span>Uno de nuestros asesores se comunicará contigo a la brevedad posible.</span>
                </div>
                <div className="formData">
                    <div className="inputDiv">
                        <label htmlFor="">
                            Nombre *:
                        </label><br />
                        <input type="text" placeholder='Ingresa tu nombre' onChange={(e) => {
                            setForm({
                                ...form,
                                nombre: e.target.value
                            })
                        }}  value={form.nombre} required />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">
                            Teléfono *:
                        </label><br />
                        <input type="text" placeholder='Ingresa tu teléfono' onChange={(e) => {
                            setForm({
                                ...form,
                                phone: e.target.value
                            })
                        }}  value={form.phone} required/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">
                            Correo *:
                        </label><br />
                        <input type="text" placeholder='Ingresa tu teléfono' onChange={(e) => {
                            setForm({
                                ...form,
                                email: e.target.value
                            })
                        }}  value={form.email} required/>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="">
                            <input type="checkbox"  required style={{width:18, height:18, display:'inline-block', marginRight:10}}
                            checked={isChecked}
                            onChange={
                                handleCheckboxChange
                            }/>
                            Al enviar formulario, acepta nuestras
                            <span style={{marginLeft:2, cursor:'pointer', textDecoration:'underline'}}
                            onClick={() => navigate('/legal/tratamientoDatos')} > Políticas, Términos y Condiciones.</span>.
                        </label><br />

                    </div>
                    <div className="inputDiv">
                        <span>{mistake ? mistake : null}</span>
                    </div>
                    <div className="inputDiv">
                        <button onClick={() => addProspecto()}>
                            <span>{loading ? 'Enviando...' : 'Contactar'}</span>
                        </button>
                    </div>

                    {/* <span >
                        Al enviar formulario, 
                        <span style={{marginLeft:2, cursor:'pointer', textDecoration:'underline'}}
                        onClick={() => navigate('/legal/tratamientoDatos')} >aceptas los términos y condiciones</span>.
                    </span> */}
                </div>
            </div>
        }

        </div>
    )
}