import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as actions from './../store/actions/actions';
import Loading from '../loading';
import NotFound from '../notFound';
import PanelSubCategory from '../subcategory/panelSub';
import { Helmet } from 'react-helmet-async';

export default function Lockers(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cid } = useParams();
    const category = useSelector(store => store.category);
    const loading = useSelector(store => store.loadingCategory);
    const move = () => {
        document.querySelector("#two").scrollIntoView({
            behavior:'smooth'
        })
    }
    useEffect(() => {
        if(!category || category == 404 || category == 'request' || category.id != cid){
            dispatch(actions.axiosGetCategory(true, cid))
        }
    }, [cid])
    return (
        !category || loading ?
            <Loading />
        :
        category == 404 || category == 'request' ?
            <NotFound />
        :
        <div className="lockers">
            <Helmet>
                <title>{category.title} - Modulares Costa</title>
                <meta name="description" content={category.smallDescription}/>
                <meta property="og:title" content={category.title} />
                <meta property="og:description" content={category.smallDescription} />
                <meta property="og:image" content={category.wallpaper} />
                <meta property="og:url" content={`https://www.modularescosta.co/services/${category.title}`} />
            </Helmet>
            <div className="pageLockers">
                <div className='firstParallax'>
                    <div className='wallpaper' style={{
                        background: `url('${category.wallpaper}')`
                    }}>
                        <div className='opacity'></div>
                    </div> 
                    <div className='containerParallax'>
                        <div className='boxOne'>
                            {/* <h3>{category.title}</h3> */}
                            <h1>{category.bigTitle}</h1>
                            <span className='txt'>{category.smallDescription.replace(/\\n/g, "\n")}</span>
                            <br />
                            <button onClick={()=>move()}>
                                <span>¡Me interesa!</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="newDiv">
                    {
                        category.subcategories && category.subcategories.length ?
                            <PanelSubCategory category={category} />
                        :null
                    }
                </div>
 

                
                <div className='invitationToAction'>
                    <div className='bigText'>
                        <h1>Obtén {category.title} de alta calidad, con los mejores precios del mercado</h1>

                        <button onClick={() => {
                            document.querySelector("#form").scrollIntoView({
                                behavior:'smooth'
                            })
                        }}>
                            <span>¡Deseo cotizar!</span>
                        </button>
                    </div>
                </div>

                <div className="txtCategory">
                    <div className="containerTxt">
                        <div className="title">
                            <h1>{category.title}</h1>
                            <h2>{category.bigTitle}</h2>
                        </div>
                        <div className="estructura">
                            <p>{category.bigDescription}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}