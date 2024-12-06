import React, { useEffect } from 'react';
import Product from './product/product';
import Archivo from './archivos/archivos';
import Sillas from './sillas/siilas';
import Mesas from './mesas/mesas';
import Lockers from './lockers/lockers';
import Home from './home';
import { Route, Routes, useNavigate} from 'react-router-dom';
import Nav from './nav';
import OfertaValor from './oferta';
import BtnWhatsApp from './btnWhatsApp';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/actions/actions';
import Loading from './loading';


export default function RoutesComponent(){
    const navigate = useNavigate();
    const categories = useSelector(store => store.categories);
    const load = useSelector(store => store.loadingCategories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.axiosGetCategories(true));
    }, [])

    return (
        load || !categories ?
            <Loading />
        :
            <div className="">
                <Nav />
                <BtnWhatsApp />
                <Routes>
                    <Route path='/' element={<Home categories={categories} />} />
                    <Route path='/services/:cid/*' element={<Lockers />} />
                    <Route path='/our/' element={<OfertaValor />} />
                    {/* <Route path='/services/mesas/*' element={<Mesas />} />
                    <Route path='/services/sillas/*' element={<Sillas />} />
                    <Route path='/services/archivo/*' element={<Archivo />} /> */}


                    <Route path='/product/:producto/*' element={<Product />} />
                </Routes>
            </div>
    )
}