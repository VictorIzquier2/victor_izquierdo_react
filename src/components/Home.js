import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import './css/home.css';
import image from './images/victor-izquierdo.png';
import facebook from './images/facebook.png';
import linkedIn from './images/linkedIn.png';
import gitHub from './images/gitHub.png';
import dragonKaiDojo from './images/dragonKaiDojo.png';


import { Link } from 'react-router-dom';


const Home = (props) => {
  return(

    <div className='container is-widescreen is-full'>
      <br/>
      <div className='sections is-full'>
        <section className='section sky-blue'>
          <div className='container opposites columns marginLeftZero is-mobile'>
            <div className='column info is-half is-gapless'>
              <div className='info lake-blue'>
                <h5 className='title is-5'>Hola, soy Victor</h5>
                <h3 className='title is-3'>Desarrollador Full Stack</h3>
                <p><strong>Combino habilidades de Front-end y Back-end para ofrecer una experiencia totalmente inmersiva y completa a los clientes.
                </strong></p>
                <br/>
                 {!props.isLogged.username && <Link className='button is-primary' to='/signup'>Más sobre Victor</Link>}
              </div>
            </div>
            <div className='column is-half is-gapless'>
              <div className='image is-square'>
                <img src={image} alt='Victor Izquierdo'/>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h5 className='title is-5'>Elige por dónde quieres empezar</h5>
            <p className='has-text-left'>En ésta landing-page la información está organizada de forma que puedas acceder a ella rápida y directa. Tienes 4 rutas de contacto para que puedas evaluarme profesionalmente. En cada ruta te encontrarás con proyectos visuales, contactos, repositorios, aplicaciones, juegos y otros contenidos. También puedes logarte en el menú de arriba y descubrir donde he trabajado y cómo he aprendido a hacer todas éstas cosas.
            </p>
          </div>
          <br/>
          <article className='article'>
            <div className='columns is-mobile'>
              <div className='column info is-half-desktop is-gapless'>
                <div className='info'>
                  <h5 className='title is-5'>Facebook</h5>
                  <p>Conecta con mi Facebook para ver qué comparto</p>
                </div>
              </div>
              <div className='column is-half-desktop is-gapless'>
                <div className='image'>
                  <a href='https://www.facebook.com/V%C3%ADctor-Izquierdo-Designs-103974914480519' target='_blank'>
                    <img src={facebook} alt='Facebook'/>
                  </a>
                </div>
              </div>
            </div>
          </article>
          <br/>
          <article className='article'>
            <div className='columns is-mobile'>
              <div className='column info is-half-desktop is-gapless'>
                <div className='info'>
                  <h5 className='title is-5'>LinkedIn</h5>
                  <p>Visita mi perfil y únete a mi red de contactos</p>
                </div>
              </div>
              <div className='column is-half-desktop is-gapless'>
                <div className='image'>
                  <a href='https://www.linkedin.com/in/victorjesusizquierdo/' target='blank'>
                    <img src={linkedIn} alt='LinkedIn'/>
                  </a>
                </div>
              </div>
            </div>
          </article>
          <br/>
          <article className='article'>
            <div className='columns is-mobile'>
              <div className='column info is-half-desktop is-gapless'>
                <div className='info'>
                  <h5 className='title is-5'>GitHub</h5>
                  <p>Entra en mi Github y echa un vistazo a los proyectos en los que estoy trabajando</p>
                </div>
              </div>
              <div className='column is-half-desktop is-gapless'>
                <div className='image'>
                  <a href='https://github.com/VictorIzquier2' target='_blank'>
                    <img src={gitHub} alt='GitHub'/>
                  </a>
                </div>
              </div>
            </div>
          </article>
          <br/>
          <article className='article'>
            <div className='columns is-mobile'>
              <div className='column info is-half-desktop is-gapless'>
                <div className='info'>
                  <h5 className='title is-5'>Juega a Dragon Kai Dojo</h5>
                  <p>Dragon Kai Dojo es un juego Full Stack que hice usando JavaScript, MongoDB y Heroku</p>
                </div>
              </div>
              <div className='column is-half-desktop is-gapless'>
                <div className='image'>
                  <a href='https://dragon-kai-dojo.herokuapp.com/' target='_blank'>
                    <img src={dragonKaiDojo} alt='Dragon Kai Dojo'/>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
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
                <h6 className='title is-6'>Copyright 2020 ® <a href="#">Victor izquierdo</a></h6>
                <span className='mx-2'>Aviso legal</span>
                <span className='mx-2'>Politica de privacidad</span>
                <span className='mx-2'>Política de cookies</span>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}
export default Home;