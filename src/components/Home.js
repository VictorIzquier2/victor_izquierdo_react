import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';


const Home = (props) => {
  return(

    <div className='container is-widescreen is-full'>
      <h2>Home</h2>
      <h3>{props.isLogged.username && `welcome, ${props.isLogged.username}`}</h3>
      {props.isLogged.username && <button onClick={() => props.logOut()}>Log Out</button>}
      <div className='sections is-full'>
        <section className='section'>
          <div className='container columns is-mobile'>
            <div className='column is-two-thirds-tablet is-gapless'>
              <div className='info'>
                <h5 className='title is-5'>Hola, soy Victor</h5>
                <h4 className='title is-4'>Desarrollador Full Stack</h4>
                <h6 className='title is-6'>Ayudo a potenciar los negocios de marcas y profesionales a través del marketing de contenidos, redes sociales, email marketing y publicidad online.
                </h6>
                <button>Más sobre Víctor</button>
              </div>
            </div>
            <div className='column is-one-third-widescreen is-gapless'>
              <div className='image is-square'>
                <img src='../../public/images/victor-izquierdo.png' alt='Victor Izquierdo 2'/>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h5 className='title is-5'>Elige por dónde quieres empezar</h5>
            <h6 className='title is-6'>Arrasa a nivel digital de forma fácil y directa</h6>
            <p>En nuestro sitio la información está organizada de forma tal que puedas sacarle el mayor provecho. Tenemos 4 rutas de aprendizaje para que te convertas en un crack en el tema que más te interesa. En cada guía de aprendizaje tenemos, Post, Plantillas, Cursos, Pack, Vídeos y muchos contenidos. Las guías te ayudarán a ir adquiriendo los conocimientos y habilidades que necesitas paso a paso.
            </p>
          </div>
          <article className='article'>
            <div className='columns is-mobile'>
              <div className='column is-half-desktop is-gapless'>
                <div className='info'>
                  <h5 className='title is-5'>Facebook ads</h5>
                  <p>Domina la herramienta que te hará visible al instante</p>
                </div>
              </div>
              <div className='column is-half-desktop is-gapless'>
                <div className='image'>
                  <img src='' alt='Dispositivos'/>
                  <button>Quiero empezar por aquí</button>
                </div>
              </div>
            </div>
          </article>
          <article className='article'>
            <div className='columns is-mobile'>
              <div className='column is-half-desktop is-gapless'>
                <div className='info'>
                  <h5 className='title is-5'>Gana dinero con tu blog</h5>
                  <p>Genera ingresos estables que alimenten tu cuenta de resultados</p>
                </div>
              </div>
              <div className='column is-half-desktop is-gapless'>
                <div className='image'>
                  <img src='#' alt='Monetizacion'/>
                  <button>Me apunto</button>
                </div>
              </div>
            </div>
          </article>
          <article className='article'>
            <div className='columns is-mobile'>
              <div className='column is-half-desktop is-gapless'>
                <div className='info'>
                  <h5 className='title is-5'>Redes sociales</h5>
                  <p>Conecta con tus clientes y conviételos en embajadores de tu marca</p>
                </div>
              </div>
              <div className='column is-half-desktop is-gapless'>
                <div className='image'>
                  <img src='#' alt='Redes sociales'/>
                  <button>Me interesa</button>
                </div>
              </div>
            </div>
          </article>
          <article className='article'>
            <div className='columns is-mobile'>
              <div className='column is-half-desktop is-gapless'>
                <div className='info'>
                  <h5 className='title is-5'>Marketing automatizado</h5>
                  <p>Comienza desde hoy a vender en piloto automático</p>
                </div>
              </div>
              <div className='column is-half-desktop is-gapless'>
                <div className='image'>
                  <img src='#' alt='Automatizacion'/>
                  <button>Quiero empezar por aquí</button>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
      <footer className='footer'>
        <section className='footer-widgets'>
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
          <div className='column'>
            <div className='info'>
                <h6 className='title is-6'>copyright 2020 <a href="#">Victor izquierdo</a></h6>
                <span>aviso legal</span>
                <span>politica de privacidad</span>
                <span>política de cookies</span>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}
export default Home;