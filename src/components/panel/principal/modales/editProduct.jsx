import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as actions from '../../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function EditProduct(props){
    const dispatch = useDispatch();
    const category = props.category;
    const product = useSelector(store => store.product);
    const [params, setParams] = useSearchParams();
    const [wallpaper, setWallpaper] = useState(null);
    const [mistake, setMistake] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cat, setCat] = useState({
        name: product ? product.name : null,
        referencia: product ? product.referencia : null,
        description: product ? product.description : null,
        photo: product ? product.photo : null,
    });

    const handleCreate = async () => {
        if(loading) return null;
        if(!cat.name || !cat.referencia || !cat.description || !cat.photo) return setMistake('No puedes dejar campos vacios');
        setLoading(true)
        const body = {
            name: cat.name,
            referencia: cat.referencia,
            description: cat.description,
            photo: cat.photo,
            productId: product.id 
        }

        const send = await axios.put('/updateProduct', body)
        .then(async (res) => {
            console.log('creado')
            setMistake('Actualizado')
            setLoading(false)
            dispatch(actions.axiosGetCategory(false, category.id));
            params.delete('w');
            setParams(params);
           return true
        })
        .catch(err => {
            setLoading(false)            
            console.log(err);
            return null
        })
        console.log(body)

        send ? setMistake('Creado con existo') : setMistake('No hemos logrado actualizar esto.')
    }
    return ( 
        <div className="modal">
            {console.log(product)}

            <div className="hidden" onClick={() => {
                console.log('cierra');
                params.delete('w');
                setParams(params);
            }}></div>
            <div className="containerModal">
                <div className="top">
                    <h3>Editar producto - {category.title}</h3>
                </div>
                <div className="editar">
                    <div className="form">
                        <div className="horizontalDiv">
                            <div className="inputDiv">
                                <label htmlFor="">Nombre </label><br />
                                <input placeholder="Nombre" onChange={(e) => {
                                        setCat({
                                            ...cat,
                                            name:e.target.value
                                        })
                                    }} value={cat.name} />
                                
                            </div>
                            <div className="inputDiv">
                                <label htmlFor="">Referencia</label><br />
                                <input placeholder="Nombre categoría" onChange={(e) => {
                                        setCat({
                                            ...cat,
                                            referencia:e.target.value
                                        })
                                    }} value={cat.referencia} />
                                
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="">Ficha tecnica</label><br />
                            <textarea name="" id=""  
                            onChange={(e) => {
                                setCat({
                                    ...cat,
                                    description:e.target.value
                                })
                            }} value={cat.description}></textarea>
                        </div>
                        <div className="horizontalDiv">
                            <div className="inputDiv">
                                <label htmlFor="">Imagen principal</label><br />
                                <input placeholder="url de la imagen" 
                                onChange={(e) => {
                                    setCat({
                                        ...cat,
                                        photo:e.target.value
                                    })
                                }} value={cat.photo} />
                            </div>
                            <div className="visualizarWallpaper Product">
                                <img src={cat.photo ? cat.photo : ''} alt="" />
                            </div>

                        </div>
                        <div className="inputDiv">
                            <button onClick={() => handleCreate()}>
                                <span>
                                    {loading ? 'Actualizando...' : 'Actualizar producto'}
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