import './Partners.css';
import google from '../../assets/google.svg';
import microsoft from '../../assets/microsoft.svg';
import airbnb from '../../assets/airbnb.svg';
import facebook from '../../assets/facebook.svg';
import spotify from '../../assets/spotify.svg';
import React from 'react';


import React from 'react'

const Partners = () => {
  return (
    <section className="part">
        <div className='partners'>
            <h1 className='title'>PARTNERS</h1>
            <h2 title2>Lorem, ipsum dolor.</h2>
            <p className="title3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div className="icons">
                <img src={google} alt="Logo" className='logo' />
                <img src={microsoft} alt="Logo" className='logo' />
                <img src={airbnb} alt="Logo" className='logo' />
                <img src={facebook} alt="Logo" className='logo' />
                <img src={spotify} alt="Logo" className='logo' />
            </div>

      
      </div>
    </section>
  )
}

export default Partners

