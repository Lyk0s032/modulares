import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function NewCategory(props){
    const [params, setParams] = useSearchParams();
    const [wallpaper, setWallpaper] = useState(null);
    const [mistake, setMistake] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cat, setCat] = useState({
        title: null,
        smallDescription:null,
        bigTitle: null,
        bigDescription: null,
        wallpaper: null 
    });

    const handleCreate = async () => {
        if(loading) return null;
        if(!cat.title || !cat.smallDescription || !cat.bigTitle || !cat.bigDescription || !cat.wallpaper) return setMistake('No puedes dejar campos vacios');
        setLoading(true)
        const body = {
            title: cat.title,
            smallDescription: cat.smallDescription,
            bigTitle: cat.bigTitle,
            bigDescription: cat.bigDescription,
            wallpaper: cat.wallpaper
        }
        const send = await axios.post('/newCategory', body)
        .then((res) => {
            console.log('creado')
            setMistake('Creado con éxito')
            setLoading(false)
            return res
        })
        .catch(err => {
            console.log('no crea nada')
            setLoading(false)            
            console.log(err);
            return null
        })

        send ? setMistake('Creado con existo') : setMistake('No hemos podido crear esto.')
    }

    return ( 
        <div className="modal">
            <div className="hidden" onClick={() => {
                params.delete('w');
                setParams(params);
            }}></div>
            <div className="containerModal">
                <div className="top">
                    <h3>Nueva categoría</h3>
                </div>
                <div className="editar">
                    <div className="form">
                        <div className="horizontalDiv">
                                <div className="inputDiv">
                                    <label htmlFor="">Nombre categoría</label><br />
                                    <input placeholder="Nombre categoría" onChange={(e) => {
                                        setCat({
                                            ...cat,
                                            title:e.target.value
                                        })
                                    }} value={cat.title}/>
                                    
                                </div>
                                <div className="inputDiv">
                                    <label htmlFor="">Titulo principal</label><br />
                                    <input placeholder="Nombre categoría" onChange={(e) => {
                                        setCat({
                                            ...cat,
                                            bigTitle:e.target.value
                                        })
                                    }} value={cat.bigTitle} />
                                    
                                </div>
                            </div>
                            <div className="inputDiv">
                                <label htmlFor="">Pequeña descripción</label><br />
                                <textarea name="" id="" onChange={(e) => {
                                        setCat({
                                            ...cat,
                                            smallDescription:e.target.value
                                        })
                                    }} value={cat.smallDescription}></textarea>
                                
                            </div>
                            
                            <div className="inputDiv">
                                <label htmlFor="">Descripcion principal</label><br />
                                <input type="text" placeholder="Descripción principal"
                                onChange={(e) => {
                                    setCat({
                                        ...cat,
                                        bigDescription:e.target.value
                                    })
                                }} value={cat.bigDescription} />

                            </div>
                            
                            <div className="horizontalDiv">
                                <div className="inputDiv">
                                    <label htmlFor="">Wallpaper</label><br />
                                    <input placeholder="url de la imagen" 
                                    onChange={(e) => {
                                        setCat({
                                            ...cat,
                                            wallpaper:e.target.value
                                        })
                                    }} value={cat.wallpaper} />
                                </div>
                                <div className="visualizarWallpaper">
                                    <img src={cat.wallpaper ? cat.wallpaper : ''} alt="" />
                                </div>

                            </div>
                        <div className="inputDiv">
                            <button onClick={() => handleCreate()}>
                                <span>
                                    {loading ? 'Creando...' : 'Crear'}
                                </span>
                            </button>

                            <span>{mistake ? mistake : null}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}