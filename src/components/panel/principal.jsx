import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomenAdmin from './principal/welcomen';
import Category from './principal/category';
import SubCategoryPanel from './principal/subcategory';

export default function Principal(){
    return (
        <div className="div">
                
            <div className="principal">
                <button style={{paddingTop:10, paddingBottom:10, paddingLeft:20,paddingRight:20,
                    backgroundColor:'transparent', borderRadius:5, cursor:'pointer',
                    marginLeft:'5%',
                    marginTop:10,
                    borderRadius:5
                }} onClick={() => {
                    window.open('https://modularescosta.co', '_target')
                }}>
                    <span>Visualizar sitio web</span>
                </button>
                <Routes>
                    <Route path="/*" element={<WelcomenAdmin />} />
                    <Route path="/category/:nameCat/*" element={<Category />} />
                    <Route path="/category/:nameCat/:nameSubCat/*" element={<SubCategoryPanel />} />


                </Routes> 
            </div>
        </div>
    )
}