import React from "react";
import "./Footer.css";
import  facebkicon from "../assets/facebkicon.svg";
import  insta from "../assets/insta.svg";
import  tweeter from "../assets/tweeter.svg";
import  pchat from "../assets/pchat.svg";
import  ticktok from "../assets/ticktok.svg";
import  watsapp from "../assets/watsapp.svg";
import  youtube from "../assets/youtube.svg";
import  copyright from "../assets/copyright.png";



const Footer = () => {
    return (
        <div className="mediaicons">
            <img src={facebkicon} alt=""  className="facebk" />
            <img src={insta} alt=""  className="insta" />
            <img src={tweeter} alt=""  className="tweeter" />
            <img src={pchat} alt=""  className="pchat" />
            <img src={ticktok} alt=""  className="tictok" />
            <img src={watsapp} alt=""  className="watsapp" />
            <img src={youtube} alt=""  className="youtube" />
            <img src={copyright} alt=""  className="copyright" />
    
        </div>
        )
}

export default Footer;
