import React, { useEffect } from 'react';
import { Routes, useSearchParams } from 'react-router-dom';
import SubCategory from './subcategory';

export default function PanelSubCategory(props){
    const category = props.category;
    const [params, setParams] = useSearchParams();

    // useEffect(() => {
    //     if(!params.get('sub')){
    //         params.set('sub', category.subcategories[0].id)
    //         setParams(params)
    //     }
    // }, [params.get('sub')]) 
    return (
        <div className="panelSub" id="two">
            <div className="containerPanelSub">
                <div className="navigationOnCategory">
                    <nav>
                        <ul>
                            {
                                category.subcategories && category.subcategories.length ?
                                    category.subcategories.map((m, i) => {
                                        return (
                                            <li onClick={() => {
                                                params.set('sub', `${m.id}`);
                                                setParams(params)
                                            }}>
                                                <div className={params.get('sub') == m.id ? 'li Active' : 'li'}>
                                                    <span>{m.title}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                :null
                            }
                        </ul>
                    </nav>
                </div>              
                <div className="listProducts">
                    <SubCategory category={category} />
                    
                </div>
            </div>
        </div>
    )
}