import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

export default function AddPhoto(props){
    const [params, setParams] = useSearchParams();
    const category = useSelector(store => store.category);

    const [cat, setCat] = useState({
        title: category.title,
        smallDescription:category.smallDescription,
        bigTitle: category.bigTitle,
        bigDescription: category.bigDescription,
        wallpaper: category.wallpaper
    });


    return ( 
        <div className="modal">
            <div className="hidden" onClick={() => {
                console.log('cierra');
                params.delete('w');
                setParams(params);
            }}></div>
            <div className="containerModal">
                <div className="top">
                    <h3>Imagen</h3>
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
                                <button>
                                    <span>
                                        Editar
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}