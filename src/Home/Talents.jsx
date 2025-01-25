import React from "react";
import "./Talents.css";
import  ceo from "../assets/ceo.svg";
import  cto from "../assets/cto.svg";
import  designer from "../assets/designer.svg";
import  developer from "../assets/developer.svg";


const Talents = () => {
return (
        <div className="company">
            <h1 className="team">TEAM</h1>
            <h2 className="talents">OUR TALENTS</h2>
            <p className="our">lorem8</p>
            <img src={ceo} alt="" className="ceo" />
            <img src={cto} alt="" className="cto" />
            <img src={designer} alt="" className="designer" />
            <img src={developer} alt="" className="developer" />
    
        </div>
        )
}

export default Talents;


