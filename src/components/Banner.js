import React from 'react';

 import {MdLocationOn} from "react-icons/md";
 import {GiCutDiamond} from "react-icons/gi";

export default function Banner({children,title,subtitle}) {
    return (
        <div className = 'banner'>
            <h1>{title}</h1>
            <div></div>
            <span>{}</span>
            <p> <GiCutDiamond className="nav-icon" /> 
                Guarantee of sterilization and disinfection
            </p>    
            <p>
                <MdLocationOn className="nav-icon" />
                Center of Eindhoven     
            </p> 
            
            {children}
        </div>
    )
}
