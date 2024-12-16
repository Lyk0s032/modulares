import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function NewSub(props){
    const category = props.category;
    const [params, setParams] = useSearchParams();
    const [wallpaper, setWallpaper] = useState(null);
    const [mistake, setMistake] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cat, setCat] = useState({
        title: null,
    });

    const handleCreate = async () => {
        if(loading) return null;
        if(!cat.title) return setMistake('No puedes dejar campos vacios');
        setLoading(true)
        const body = {
            name: cat.title,
            categoryId: category.id,
        }
        const send = await axios.post('/newSubcategory', body)
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
            return null;
        })

        send ? setMistake('Creado con exito') : setMistake('No hemos podido crear esto.')
    }

    return ( 
        <div className="modal">
            <div className="hidden" onClick={() => {
                params.delete('w');
                setParams(params);
            }}></div>
            <div className="containerModal">
                <div className="top">
                    <h3>Nueva sub categoría</h3>
                </div>
                <div className="editar">
                    <div className="form">
                        <div className="horizontalDiv">
                                <div className="inputDiv">
                                    <label htmlFor="">Titulo de la subcategoría</label><br />
                                    <input placeholder="Nombre categoría" onChange={(e) => {
                                        setCat({
                                            ...cat,
                                            title:e.target.value
                                        })
                                    }} value={cat.title} style={{width:'100%'}}/>
                                    
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