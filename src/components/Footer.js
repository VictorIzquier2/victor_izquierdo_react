import React from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Footer.css';

// COMPONENTS

// DEPENDENCIES

const Footer = () => { 
  
  return(
    <footer className='footer'>
        <section className='footer-widgets'>
          <div className='column'>
            <div className='info'>
                <h6 className='title is-6'>Copyright 2020 ® <a href="/">Victor izquierdo</a></h6>
                <span className='mx-2'>Aviso legal</span>
                <span className='mx-2'>Politica de privacidad</span>
                <span className='mx-2'>Política de cookies</span>
            </div>
          </div>
        </section>
      </footer>
  )
}

export default Footer;