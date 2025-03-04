import axios from 'axios';
import React from 'react';
import { MdPhone, MdWhatsapp } from 'react-icons/md';
import { TbMessageChatbot } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export default function BtnWhatsApp(){
    const navigate = useNavigate();

    const addClicWhastApp = async () => {
        let body = {
            namePersona: 'WhatsApp Clic - Modulares Costa',
            phone: 'WhatsApp Clic ',
            type: 'digital',
            fuenteId: 12
        }
        const sendCreate = await axios.post('https://comercialapi-production.up.railway.app/api/prospecto/create', body)
        .then((res) => {
            return true
        })
        .then((res) => {
            sendMessage();
        })
        .catch(err => {
            console.log(err);
            return null;
        });

        return sendCreate;
    }
    const sendMessage = () => {
        let numero = '573108795173'
        const mensaje = encodeURIComponent("Hola, estoy interesado/a en conocer más");
        const enlace = `https://wa.me/${numero}?text=${mensaje}`;
        window.open(enlace, "_blank");
    }

    const ToContact = () => {
        navigate('/contacto')
    }
    return (
        <div className="btnWhatsApp">
            <button className="messgeBtn" onClick={()=> ToContact()}>
                <TbMessageChatbot className='icon' />
            </button><br />
            <button onClick={()=> addClicWhastApp()}>
                <MdWhatsapp className='icon' />
            </button>
        </div>
    )
}