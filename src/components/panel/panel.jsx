import react from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './login';
import Principal from './principal';

export default function PanelAdmin(){
    return (
        <div className="panel">
            <div className="containerPanel">
                <Routes>
                    <Route path="/*" element={<Principal />}/>
                </Routes>
            </div>
        </div>
    )
}