import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
    const navigate = useNavigate();
    return (
        <div className="loading">
            <div className="containerLoading">
                <img src="https://metalicascosta.com.co/assets/img/logo_metalicas_costa.png" alt="" />
                <br /><br />
                <h1>No hemos encontrado este sitio.</h1>
                <button onClick={() => navigate('/')}>
                    <span>Ir a la pagina principal</span>
                </button>
            </div>
        </div>
    )
}