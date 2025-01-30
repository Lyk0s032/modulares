import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as actions from './../store/actions/actions';
import Loading from '../loading';
import NotFound from '../notFound';
import PanelSubCategory from '../subcategory/panelSub';

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

                        <button onClick={() => move()}>
                            <span>¡Me interesa!</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}