import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';
import './assets/css/Home.css';
import image from './assets/images/victor-izquierdo.png';
import facebook from './assets/images/facebook.png';
import linkedIn from './assets/images/linkedIn.png';
import gitHub from './assets/images/gitHub.png';
import dragonKaiDojo from './assets/images/dragonKaiDojo.png';


import { Link } from 'react-router-dom';

class Home extends Component {
  
  //constructor(props){
    //super(props);
    //this.state = {
    
    //}
    
  //}

  render(){
    return(
      <div className='container is-widescreen is-full'>
        <br/>
        <div className='sections is-full'>
          <section className='section sky-blue'>
            <div className='container columns ml-is-0 is-mobile slider-1'>
              <div className='column info is-half is-gapless'>
                <div className='info lake-blue'>
                  <h5 className='title is-5'>Hola, soy Victor</h5>
                  <h3 className='title is-3'>Desarrollador Full Stack</h3>
                  <p><strong>Combino habilidades de Front-end y Back-end para ofrecer una experiencia totalmente inmersiva y completa a los clientes.
                  </strong></p>
                  <br/>
                  {!this.props.isLogged.username && <Link className='button sixties-green' to='/login'>Más sobre Victor</Link>}
                  {this.props.isLogged.username && <Link className='button sixties-green' to='/profile'>Más sobre Victor</Link>}
                </div>
              </div>
              <div className='column is-half is-gapless'>
                <div className='image is-square'>
                  <img src={image} alt='Victor Izquierdo'/>
                </div>
              </div>
            </div>
          </section>
          <section className='section is-full'>
            <div className='container slider-2'>
              <h5 className='title is-5 is-lake'>Elige por dónde quieres empezar</h5>
              <p className='has-text-left'>En ésta landing la información está organizada de forma que puedas acceder a ella rápida y directa. Tienes 4 rutas de contacto para que puedas evaluarme profesionalmente. En cada ruta encontrarás mis proyectos visuales, contactos, repositorios, aplicaciones, juegos y otros contenidos. También puedes logarte en el menú de arriba y descubrir donde he trabajado y cómo he aprendido a hacer todas éstas cosas.
              </p>
            </div>
            <br/>
            <article className='article'>
              <div className='columns is-mobile'>
                <div className='column info is-half-desktop is-gapless'>
                  <a href='https://www.facebook.com/V%C3%ADctor-Izquierdo-Designs-103974914480519' target='_blank' rel='noreferrer'>
                    <div className='info'>
                      <h5 className='title is-5 is-lake'>Facebook</h5>
                      <p>Conecta con mi Facebook para ver qué comparto</p>
                    </div>
                  </a>
                </div>
                <div className='column is-half-desktop is-gapless'>
                  <div className='image'>
                    <a href='https://www.facebook.com/V%C3%ADctor-Izquierdo-Designs-103974914480519' target='_blank' rel='noreferrer'>
                      <img src={facebook} alt='Facebook'/>
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <hr/>
            <article className='article'>
              <div className='columns is-mobile'>
                <div className='column info is-half-desktop is-gapless'>
                  <a href='https://www.linkedin.com/in/victorjesusizquierdo/' target='_blank' rel='noreferrer'>
                    <div className='info'>
                      <h5 className='title is-5 is-sand'>LinkedIn</h5>
                      <p>Visita mi perfil y únete a mi red de contactos</p>
                    </div>
                  </a>
                </div>
                <div className='column is-half-desktop is-gapless'>
                  <div className='image'>
                    <a href='https://www.linkedin.com/in/victorjesusizquierdo/' target='_blank' rel='noreferrer'>
                      <img src={linkedIn} alt='LinkedIn'/>
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <hr/>
            <article className='article'>
              <div className='columns is-mobile'>
                <div className='column info is-half-desktop is-gapless'>
                  <a href='https://github.com/VictorIzquier2' target='_blank' rel='noreferrer'>
                    <div className='info'>
                      <h5 className='title is-5 is-sixties'>GitHub</h5>
                      <p>Entra en mi Github y echa un vistazo a los proyectos en los que estoy trabajando</p>
                    </div>
                  </a>
                </div>
                <div className='column is-half-desktop is-gapless'>
                  <div className='image'>
                    <a href='https://github.com/VictorIzquier2' target='_blank' rel='noreferrer'>
                      <img src={gitHub} alt='GitHub'/>
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <hr/>
            <article className='article'>
              <div className='columns is-mobile'>
                <div className='column info is-half-desktop is-gapless'>
                  <a href='https://dragon-kai-dojo.herokuapp.com/' target='_blank' rel='noreferrer'>
                    <div className='info'>
                      <h5 className='title is-5 is-burdeaux'>Juega a Dragon Kai Dojo</h5>
                      <p>Dragon Kai Dojo es un juego Full Stack que hice usando JavaScript, MongoDB y Heroku</p>
                    </div>
                  </a>
                </div>
                <div className='column is-half-desktop is-gapless'>
                  <div className='image'>
                    <a href='https://dragon-kai-dojo.herokuapp.com/' target='_blank' rel='noreferrer'>
                      <img src={dragonKaiDojo} alt='Dragon Kai Dojo'/>
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <hr/>
          </section>
        </div>
      </div>
    )
  }
}
export default Home;