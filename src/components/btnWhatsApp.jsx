import React from 'react';
import { MdWhatsapp } from 'react-icons/md';

export default function BtnWhatsApp(){
    const sendMessage = () => {
        let numero = '573174700318'
        const mensaje = encodeURIComponent("Hola, estoy interesado/a en conocer más");
        const enlace = `https://wa.me/${numero}?text=${mensaje}`;
        window.open(enlace, "_blank");
    }
    return (
        <div className="btnWhatsApp">
            <button onClick={()=> sendMessage()}>
                <MdWhatsapp className='icon' />
            </button>
        </div>
    )
}