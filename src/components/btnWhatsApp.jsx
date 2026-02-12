import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { MdPhone, MdWhatsapp } from 'react-icons/md';
import { TbMessageChatbot } from 'react-icons/tb';
import { IoClose, IoCheckmarkCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function BtnWhatsApp(){
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        mensaje: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const formRef = useRef(null);

    // Cerrar formulario al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                // Verificar que el clic no sea en el botón de WhatsApp
                const whatsappButton = event.target.closest('.btnWhatsApp button:not(.messgeBtn)');
                const whatsappContainer = event.target.closest('.btnWhatsApp');
                
                // Si el clic es en el overlay o fuera del contenedor de WhatsApp, cerrar
                if (!whatsappButton && !whatsappContainer) {
                    setShowForm(false);
                }
            }
        };

        if (showForm) {
            // Pequeño delay para evitar que se cierre inmediatamente al abrir
            setTimeout(() => {
                document.addEventListener('mousedown', handleClickOutside);
            }, 100);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showForm]);

    const dispatchThat = () => {
        const event = new CustomEvent('gtm_event', {
            detail: {
                event: 'whatsapp_click'
            }
        });
        window.dispatchEvent(event); 
    
        window.dataLayer = window.dataLayer || []; // Asegura que dataLayer existe
        window.dataLayer.push({
            event: 'whatsapp_click' // Este es el nombre del evento que GTM detectará
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validar que todos los campos estén completos
        const nombre = formData.nombre.trim();
        const telefono = formData.telefono.trim();
        const mensaje = formData.mensaje.trim();
        
        if (!nombre || !telefono || !mensaje) {
            alert('Por favor completa todos los campos obligatorios: Nombre, Teléfono y Mensaje');
            return;
        }

        setIsSubmitting(true);

        try {
            // Enviar datos al endpoint
            const body = {
                contactName: nombre,
                phone: telefono,
                sourceId: 12,
                message: mensaje
            };

            const response = await axios.post(
                'https://comercialapi-production.up.railway.app/api/prospecto/external/prospects',
                body
            );

            // Si el envío fue exitoso, abrir WhatsApp con el mensaje
            if (response.status === 200 || response.status === 201) {
                let numero = '573206864572';
                const mensajeEncoded = encodeURIComponent(mensaje);
                const enlace = `https://wa.me/${numero}?text=${mensajeEncoded}`;
                window.open(enlace, "_blank");

                dispatchThat();
                
                // Mostrar mensaje de éxito y limpiar formulario
                setShowSuccess(true);
                setFormData({
                    nombre: '',
                    telefono: '',
                    mensaje: ''
                });
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            // Aún así, abrir WhatsApp si falla el endpoint
            let numero = '573206864572';
            const mensajeEncoded = encodeURIComponent(mensaje);
            const enlace = `https://wa.me/${numero}?text=${mensajeEncoded}`;
            window.open(enlace, "_blank");
            
            dispatchThat();
            
            // Mostrar mensaje de éxito y limpiar formulario
            setShowSuccess(true);
            setFormData({
                nombre: '',
                telefono: '',
                mensaje: ''
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
        // Resetear el mensaje de éxito cuando se cierra/abre el formulario
        if (showForm) {
            setShowSuccess(false);
            setFormData({
                nombre: '',
                telefono: '',
                mensaje: ''
            });
        }
    };

    const ToContact = () => {
        navigate('/contacto')
    }
    
    return (
        <div className="btnWhatsApp">
            <button className="messgeBtn"
            title="Contáctanos" onClick={()=> ToContact()}>
                <TbMessageChatbot className='icon' />
            </button><br />
            <button
                className={showForm ? 'active' : ''}
                title="¡Hablemos por WhastApp!"
                onClick={toggleForm}>
                <MdWhatsapp className='icon' />
            </button>
            
            {showForm && (
                <div 
                    className="whatsapp-form-overlay"
                    onClick={(e) => {
                        // Cerrar si se hace clic directamente en el overlay
                        if (e.target === e.currentTarget) {
                            setShowForm(false);
                        }
                    }}>
                    <div className="whatsapp-form-container" ref={formRef}>
                        <div className="whatsapp-form-header">
                            <div className="whatsapp-form-header-content">
                                <div className="whatsapp-form-avatar">
                                    <MdWhatsapp className='whatsapp-icon-header' />
                                </div>
                                <div className="whatsapp-form-header-text">
                                    <h3>Modulares Costa</h3>
                                    <span>En línea</span>
                                </div>
                            </div>
                            <button 
                                className="whatsapp-form-close"
                                onClick={() => setShowForm(false)}
                                title="Cerrar">
                                <IoClose />
                            </button>
                        </div>
                        
                        {showSuccess ? (
                            <div className="whatsapp-form">
                                <div className="whatsapp-form-success">
                                <div className="whatsapp-success-icon">
                                    <IoCheckmarkCircle />
                                </div>
                                <h3>¡Mensaje enviado con éxito! 🎉</h3>
                                <p>Gracias por contactarnos. Hemos recibido tu mensaje y nos comunicaremos contigo muy pronto.</p>
                                <button 
                                    className="whatsapp-form-close-btn"
                                    onClick={() => {
                                        setShowForm(false);
                                        setShowSuccess(false);
                                        setFormData({
                                            nombre: '',
                                            telefono: '',
                                            mensaje: ''
                                        });
                                    }}>
                                    Perfecto, gracias
                                </button>
                            </div>
                            </div>
                        ) : (
                            <form className="whatsapp-form" onSubmit={handleSubmit}>
                                <div className="whatsapp-form-field">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>
                                
                                <div className="whatsapp-form-field">
                                    <label htmlFor="telefono">Teléfono</label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                        placeholder="Tu número de teléfono"
                                        required
                                    />
                                </div>
                                
                                <div className="whatsapp-form-field">
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleInputChange}
                                        placeholder="Escribe tu mensaje aquí..."
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="whatsapp-form-submit"
                                    disabled={isSubmitting}>
                                    <MdWhatsapp className='whatsapp-icon-submit' />
                                    <span>{isSubmitting ? 'Enviando...' : 'Enviar a WhatsApp'}</span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}