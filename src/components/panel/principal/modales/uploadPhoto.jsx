import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as actions from './../../../store/actions/actions';
export default function UpdatePhoto(){
    const [params, setParams] = useSearchParams();
    const product = useSelector(store => store.product);
    const [wallpaper, setWallpaper] = useState(null);
    const [mistake, setMistake] = useState(null);
    const [messageUpload, setMessageUpload] = useState(null);
    const [deleteMistake, setDeleteMistake] = useState(null);
    const [deleted, setDeleted] = useState([])
    const dispatch = useDispatch();

    const handleAddPhoto =  async () => {
        if(!wallpaper) return setMistake('Ingresa una imagen');
        const body = {
            url: wallpaper,
            title: 'Por definir',
            productId: product.id
        }
        const upload = await axios.post('addPhoto', body)
        .then((res) => {
            console.log(res)
            dispatch(actions.getProduct(res.data))
            setWallpaper('')
            return true

        })
        .catch(err => {
            console.log(err)
            return null
        });

        return upload ? setMistake('Imagen subida con éxito') : setMistake('No hemos podido subir esta imagen.')
    }

    const removeImage = async (imgId) => {
        if(!imgId) return setDeleteMistake('Id invalido');

        const upload = await axios.delete(`/delete/imagen/${imgId}`)
        .then((res) => {
            console.log(res)
            setDeleted([...deleted, imgId])
            console.log(deleted)
            return true


        })
        .catch(err => {
            console.log(err)
            return null
        });

        return upload ? setDeleteMistake('Eliminada con éxito') : setDeleteMistake('No hemos Logrado eliminar imagen.')
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
                    <h3>Actualizar Modal</h3>
                </div>
                <div className="editar">
                    <div className="divide">
                        <div className="left">
                            <div className="imagenes">
                                {
                                    product.media && product.media.length ?
                                        product.media.map((img, i) => {
                                            return (
                                                <div className="imagen" key={i+1}>
                                                    {
                                                        deleted.includes(img.id)?
                                                        null
                                                        :
                                                        <button className='del' onClick={() => removeImage(img.id)}> <span>x</span> </button>

                                                    }
                                                    {
                                                        deleted.includes(img.id)?
                                                    <button className='delete' >
                                                        <h1 style={{color: 'red'}}>X</h1>
                                                    </button>
                                                    :
                                                    <img src={img.url} alt="" />
                                                    }
                                                
                                                    </div>
                                            )
                                        })
                                    : <span>No hay imagenes</span>
                                }
                                <span>{deleteMistake}</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="upload">
                                <div className="wallpaper">
                                    <img src={wallpaper} alt="" />
                                </div>
                                <div className="form">
                                    <input type="text" id="wall" placeholder='Ingresa el enlace' 
                                    onChange={(e) => setWallpaper(e.target.value)} value={wallpaper} />
                                    <button onClick={() => handleAddPhoto()}>
                                        <span>Subir imagen</span>
                                    </button>
                                    <span>{mistake ? mistake : null}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}