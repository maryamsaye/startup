import React from 'react';
import './portfolio.css';
import  landingpage from "../assets/landingpage.svg";
import  webdesign from "../assets/webdesign.svg";
import  rocket from "../assets/rocket.svg";
import  shopping from "../assets/shopping.svg";
import  geometric from "../assets/geometric.svg";
import  tricks from "../assets/tricks.svg";
import  halloween from "../assets/halloween.svg";
import  virtual from "../assets/virtual.png";

const works = () => {
  return (
    <section className='work-container'>
      <div className='work'>
        <h1 className='head'>WORKS</h1>
        <h2 className='body'>PORTFOLIO</h2>
        <p className='lorem'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <div className='photos'>
          <img src={landingpage} alt="" className="img" />
          <img src={webdesign} alt="" className="img" />
          <img src={rocket} alt="" className="img" />
          <img src={shopping} alt="" className="img" />
          <img src={geometric} alt="" className="img" />
          <img src={tricks} alt="" className="img" />
          <img src={halloween} alt="" className="img" />
          <img src={virtual} alt="" className="img" />

        </div>
      

    </div>
    </section>
  )
}

export default works;

