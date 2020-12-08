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
        <section className='section is-full'>
          <div className='columns is-mobile'>
            <div className='column is-half-desktop is-gapless'>
              <div className='image'>
                <img src='#' alt='Victor Izquierdo'/>
              </div>
            </div>
            <div className='column is-half-desktop is-gapless'>
              <div className='aside'>
                <div className='info'>
                  <section>
                    <p><span>Toma ventaja</span> con el pack de recursos y estrategias que utilizamos en mi agencia pra generar miles de dólares cadadía, en piloto automático</p>
                  </section>
                  <section>
                    <h3>Échale un <span>VISTAZO</span> a mi currículum</h3>
                    <button>Envíame el Currículo</button>
                    <h6>Sin secretos, 100% el mismo que utilizamos día a día en mi agencia</h6>
                  </section>
                  <section>
                    <p><span>He ayudado a vender más a </span></p>
                    <img src="#" alt="empresas"/>
                  </section>
                </div>
              </div>{/*end of aside*/}
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='columns is-mobile'>
            <div className='column is-two-thirds-tablet is-gapless'>
              <div className='info'>
                <h3>Hola, soy Victor</h3>
                <h2>Desarrollador Full Stack</h2>
                <h6>Ayudo a potenciar los negocios de marcas y profesionales a través del marketing de contenidos, redes sociales, email marketing y publicidad online.
                </h6>
                <button>Más sobre Víctor</button>
              </div>
            </div>
            <div className='column is-one-third-widescreen is-gapless'>
              <div className='image'>
                <img src='#' alt='Victor Izquierdo 2'/>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='column'>
            <h5>Elige por dónde quieres empezar</h5>
            <h2>Arrasa a nivel digital de forma fácil y directa</h2>
            <p>En nuestro sitio la información está organizada de forma tal que puedas sacarle el mayor provecho. Tenemos 4 rutas de aprendizaje para que te convertas en un crack en el tema que más te interesa. En cada guía de aprendizaje tenemos, Post, Plantillas, Cursos, Pack, Vídeos y muchos contenidos. Las guías te ayudarán a ir adquiriendo los conocimientos y habilidades que necesitas paso a paso.
            </p>
            <article className='article'>
              <div className='columns is-mobile'>
                <div className='column is-half-desktop is-gapless'>
                  <div className='info'>
                    <h4>Facebook ads</h4>
                    <p>Domina la herramienta que te hará visible al instante</p>
                  </div>
                </div>
                <div className='column is-half-desktop is-gapless'>
                  <div className='image'>
                    <img src='#' alt='Dispositivos'/>
                    <button>Quiero empezar por aquí</button>
                  </div>
                </div>
              </div>
            </article>
            <article className='article'>
              <div className='columns is-mobile'>
                <div className='column is-half-desktop is-gapless'>
                  <div className='info'>
                    <h4>Gana dinero con tu blog</h4>
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
                    <h4>Redes sociales</h4>
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
                    <h4>Marketing automatizado</h4>
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
          </div>
        </section>
      </div>
      <footer className='footer'>
        <section className='footer-widgets'>
          <div className='columns is-mobile'>
            <div className='column is-one-quarter-fullhd is-gapless'>
              <article className='widget-footer-1'>
                <h3>Recursos</h3>
                <ul>
                  <li><a href="#">Recursos</a></li>
                  <li><a href="#">Cursos de marketing Digital</a></li>
                  <li><a href="#">Preguntas frecuentes</a></li>
                </ul>
              </article>
            </div>
            <div className='column is-one-quarter-fullhd is-gapless'>
              <article className='widget-footer-1'>
                <h3>Comienza a aprender</h3>
                <ul>
                  <li><a href="#">Redes sociales</a></li>
                  <li><a href="#">Facebook ads</a></li>
                  <li><a href="#">Automatización de Marketing</a></li>
                </ul>
              </article>
            </div>
            <div className='column is-one-quarter-fullhd is-gapless'>
              <article className='widget-footer-1'>
                <h3>Víctor Izquierdo</h3>
                <ul>
                  <li><a href="#">Sobre Víctor</a></li>
                  <li><a href="#">Servicios</a></li>
                  <li><a href="#">Contacto</a></li>
                </ul>
              </article>
            </div>
            <div className='column is-one-quarter-fullhd is-gapless'>
              <article className='widget-footer-1'>
                <h3>Conectate conmigo</h3>
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
                <h6>copyright 2020 <a href="#">Victor izquierdo</a></h6>
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