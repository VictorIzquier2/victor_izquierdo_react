import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Footer.css';

// COMPONENTS

// DEPENDENCIES

class Footer extends Component {
  constructor(props){
    super(props);
      this.state = {

      }

  }

  render(){
    return(
      <footer className='footer'>
          <section className='footer-widgets'>
            {/*
            <div className='columns is-mobile'>
              <div className='column is-one-quarter-fullhd is-gapless'>
                <article className='widget-footer-1'>
                  <h6 className='title is-6'>Recursos</h6>
                  <ul>
                    <li><a href="#">Recursos</a></li>
                    <li><a href="#">Cursos de marketing Digital</a></li>
                    <li><a href="#">Preguntas frecuentes</a></li>
                  </ul>
                </article>
              </div>
              <div className='column is-one-quarter-fullhd is-gapless'>
                <article className='widget-footer-1'>
                  <h6 className='title is-6'>Comienza a aprender</h6>
                  <ul>
                    <li><a href="#">Redes sociales</a></li>
                    <li><a href="#">Facebook ads</a></li>
                    <li><a href="#">Automatización de Marketing</a></li>
                  </ul>
                </article>
              </div>
              <div className='column is-one-quarter-fullhd is-gapless'>
                <article className='widget-footer-1'>
                  <h6 className='title is-6'>Víctor Izquierdo</h6>
                  <ul>
                    <li><a href="#">Sobre Víctor</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contacto</a></li>
                  </ul>
                </article>
              </div>
              <div className='column is-one-quarter-fullhd is-gapless'>
                <article className='widget-footer-1'>
                  <h6 className='title is-6'>Conectate conmigo</h6>
                  <ul>
                    <li>Sígueme en las redes sociales</li>
                    <li>Victor Izquierdo</li>
                    <li>
                      <a href="#"><img src="#" alt="facebook"/></a>
                      <a href="#"><img src="#" alt="instagram"/></a>
                      <a href="#"><img src="#" alt="linkedIn"/></a>
                      <a href="#"><img src="#" alt="github"/></a>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            */}
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
}

export default Footer;