import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomenAdmin from './principal/welcomen';
import Category from './principal/category';

export default function Principal(){
    return (
        <div className="div">
            <div className="principal">
                <Routes>
                    <Route path="/*" element={<WelcomenAdmin />} />
                    <Route path="/category/:category/*" element={<Category />} />

                </Routes> 
            </div>
        </div>
    )
}