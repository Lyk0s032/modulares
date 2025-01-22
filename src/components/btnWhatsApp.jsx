import React from 'react';
import { MdPhone, MdWhatsapp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function BtnWhatsApp(){
    const navigate = useNavigate();
    const sendMessage = () => {
        let numero = '573206864572'
        const mensaje = encodeURIComponent("Hola, estoy interesado/a en conocer más");
        const enlace = `https://wa.me/${numero}?text=${mensaje}`;
        window.open(enlace, "_blank");
    }

    const ToContact = () => {
        navigate('/contacto')
    }
    return (
        <div className="btnWhatsApp">
            <button style={{backgroundColor: 'blue', borderColor:'blue'}} onClick={()=> ToContact()}>
                <MdPhone className='icon' />
            </button><br />
            <button onClick={()=> sendMessage()}>
                <MdWhatsapp className='icon' />
            </button>
        </div>
    )
}