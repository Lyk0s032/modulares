import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';
import ModalProjects from './modalProyect';
import { useSearchParams } from 'react-router-dom';

export default function ListsProyects(){
    const [params, setParams] = useSearchParams();

    return (
        <div className="listsProyects" id="projects">
            {
                params.get('m') == 'watch' ?
                    <ModalProjects />
                :null
            }
            <div className="containerListsProyectos">
                <div className="titleWelcomen">
                    <div className="line"></div>
                        <h3>Nuestros clientes</h3>
                    <div className="line"></div>
                </div>
                <div className="containerClientsGroups">
                    <div className="divGroups">
                        <div className="client">
                            <div className="photo">
                                <img src="https://modularescosta.co/images/logo-whiteb.png" alt="" />
                            </div>
                            <div className="data">
                                <span>Modulares cota</span>
                                <div className="stars">
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                </div>
                            </div>
                        </div>

                        <div className="client">
                            <div className="photo">
                                <img src="https://modularescosta.co/images/logo-whiteb.png" alt="" />
                            </div>
                            <div className="data">
                                <span>Modulares cota</span>
                                <div className="stars">
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                </div>
                            </div>
                        </div>

                        <div className="client Big">
                            <div className="photo">
                                <img src="https://modularescosta.co/images/logo-whiteb.png" alt="" />
                            </div>
                            <div className="data">
                                <span>Modulares cota</span>
                                <div className="stars">
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                </div>
                            </div>
                        </div>

                        <div className="client Big">
                            <div className="photo">
                                <img src="https://modularescosta.co/images/logo-whiteb.png" alt="" />
                            </div>
                            <div className="data">
                                <span>Modulares cota</span>
                                <div className="stars">
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                </div>
                            </div>
                        </div>
                        <div className="client">
                            <div className="photo">
                                <img src="https://modularescosta.co/images/logo-whiteb.png" alt="" />
                            </div>
                            <div className="data">
                                <span>Modulares cota</span>
                                <div className="stars">
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                </div>
                            </div>
                        </div>

                        <div className="client">
                            <div className="photo">
                                <img src="https://modularescosta.co/images/logo-whiteb.png" alt="" />
                            </div>
                            <div className="data">
                                <span>Modulares cota</span>
                                <div className="stars">
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                    <MdOutlineStar className="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="testimonial">
                    <div className="containerThis">
                        <div className="titleTestimonial">
                            <div className="desc">
                                <h1>Testimonios</h1>
                                <h3>Nos hace feliz escucharlos</h3>
                            </div>
                        </div>
                        <div className="containerTestimonial">
                            <div className="btns">
                                <button>
                                    <FaChevronLeft className="icon" />
                                </button>
                            </div>
                            <div className="testimonioContainer">
                                <div className="slider">
                                    <div className="testimonio">
                                        <h3>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis consequuntur eveniet cum eligendi porro debitis eum ipsum! Ex, sequi amet, molestias enim nobis dignissimos totam, id eveniet harum libero esse?
                                        </h3>
                                        <div className="autor">
                                            <strong>
                                                Kevin Bolaños
                                            </strong><br />
                                            <span>Gerente de Coca Cola</span>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="btns">
                                <button>
                                    <FaChevronRight className="icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}