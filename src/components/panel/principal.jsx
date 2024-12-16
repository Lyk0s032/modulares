import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomenAdmin from './principal/welcomen';
import Category from './principal/category';
import SubCategoryPanel from './principal/subcategory';

export default function Principal(){
    return (
        <div className="div">
            <div className="principal">
                <Routes>
                    <Route path="/*" element={<WelcomenAdmin />} />
                    <Route path="/category/:nameCat/*" element={<Category />} />
                    <Route path="/category/:nameCat/:nameSubCat/*" element={<SubCategoryPanel />} />


                </Routes> 
            </div>
        </div>
    )
}