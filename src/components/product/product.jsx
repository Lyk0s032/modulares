import React, { useEffect } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

export default function Product(){
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className='product'>
            <div className='containerProduct'>
                <div className='containerProductsCar'>
                    <div className='containerCars'>

                        <div className='wallpaper'>
                                <img src="https://modularescosta.co/docs/producto/ori_1988147203_3x9-celosia-manija-gris.webp" alt="" />
                            </div>
                        <div className="car">
                            <div className="containerCar">
                                <div className="header">
                                    <h1>Lockers Metalico 3x9</h1>
                                    <h3>3x9 - <span>REF</span></h3>
                                </div>
                                <div className='desc'>
                                    <button>
                                        <span>Disponible</span>
                                    </button><br />
                                    <strong>Descripción</strong><br /><br />
                                    <span>
                                        Locker de 1.67 X .90 X .30 con 9 servicios (3X9), altura aproximada por servicio 0.52 cm, fabricados en lamina CR cal. 23, soportes o patas en c/14, puertas con refuerzo, manija en lamina tipo zeta , ventilacion punzonada con diseño a cuadros o celosía, gancho ropero y porta candado.
                                    </span>
                                    
                                </div>
                                <div className="buttonAction">
                                    <button className='action'>
                                        <BsWhatsapp className='icon' />
                                        <span>
                                            Más información
                                        </span>
                                    </button>
                                    <button className='others'>
                                        <span>
                                            Productos similares
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='otherCasilleros'>
                    <div className="containerOther">
                        <div className='titleLockers'>
                            <h1>Otros productos</h1>
                            <span>Visita nuestra linea de Lockers </span>
                        </div>
                        <div className='lockers'>
                            <div className="locker">
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1988147203_3x9-celosia-manija-gris.webp" alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker">
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1551881596_2x4-celosia-gris-1.webp" alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker">
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1988147203_3x9-celosia-manija-gris.webp" alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                            <div className="locker">
                                <div className="opacityDiv"></div>
                                <img src="https://modularescosta.co/docs/producto/ori_1551881596_2x4-celosia-gris-1.webp" alt="" />
                                <div className="desc">
                                    <h3>Silla Armagedon</h3>
                                    <span>REF - 4520 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}