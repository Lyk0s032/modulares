import react from 'react';

export default function ModalProjects(){
    return (
        <div className="modal">
            <div className="hidden"></div>
            <div className="containerModal">
                <div className="divideModal">
                    <div className="left">
                        <div className="containerLeft">
                            <div className="wallpaper">
                                <img src="https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-0.png" alt="" />
                            </div>

                            <div className="data">
                                <strong>Detalles</strong>
                                <br /><br />
                                <span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vero, omnis dolorum a ipsum delectus molestias placeat ea iste dolores sit perferendis totam quidem laboriosam repellat exercitationem dolor sequi unde.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="containerGalery">
                            <div className="topSee">
                                <div className="box">
                                    <img src="https://www.mepal.com.co/wp-content/uploads/2022/11/10-Interbel_recepcion.jpg" alt="" />
                                </div>
                            </div>
                            <div className="bottomChoose">
                                <div className="listsChoose">
                                    <div className="box">
                                        <img src="https://www.mepal.com.co/wp-content/uploads/2022/11/10-Interbel_recepcion.jpg" alt="" />
                                    </div>
                                    <div className="box">
                                        <img src="https://www.mepal.com.co/wp-content/uploads/2022/11/11-Interbel_sofa.jpg" alt="" />
                                    </div>
                                    <div className="box">
                                        <img src="https://www.mepal.com.co/wp-content/uploads/2022/11/10-Interbel_recepcion.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}