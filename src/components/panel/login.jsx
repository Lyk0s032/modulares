import React, { useState } from 'react';

export default function SignIn(){
    const usuario = `admin`;
    const pass = '123';

    const [mistake, setMistake] = useState('No puedes dejar campos vacios');
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);    
    
    const validate = async () => {
        // Verificamos que los datos se Llenen
        if(!user || !password ) return setMistake('No puedes dejar campos vacios');
        // Caso contrario, avanzamos...
        
    }
    return (
        <div className="sign">
            <div className="containerSign">
                <div className="topTitle">
                    <h1>Acceder al panel de control</h1>
                </div>
                <div className="containerForm">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <div className="input">
                            <label htmlFor="">Usuario</label><br />
                            <input type="text" 
                            onChange={(e) => {
                                setUser(e.target.value);
                            }} value={user} placeholder='Escribe aquí' />
                        </div>
                        <div className="input">
                            <label htmlFor="">Contraseña</label><br />
                            <input type="password" 
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} value={password} placeholder='****'/>
                        </div>
                        <div className="input">
                            <button className={user && password ? 'Active' : null}>
                                <span>Acceder</span>
                            </button>
                        </div>
                        <div className="mistake">
                            <span>{mistake}</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}