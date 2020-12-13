import React from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';

const Experiences = (props) => { 
  return props.experiencesFromDB.map((item)=>{
    return (
        <div className='column is-half'>
          <div className='box'>
          <article className='media'>
            <div className='media-left'>
              <figure className='image is-64x64'>
                <img src={item.imageUrl} alt='Victor Izquierdo'/>
              </figure>
            </div>
            <div className='media-content'>
                <p><strong>{item.cargo}</strong> <small>{item.empleo} en {item.empresa}</small></p>
                <p>{item.descripcion}</p>
                <p><small>{item.ubicacion}</small></p>
              <form onSubmit={(event)=>props.deleteExperiencesFromDB(event, item._id)}
              >
                  <button type='submit'>Delete</button>
              </form>                
            </div>
          </article>
          </div>
        </div>
    )
  })
}
export default Experiences;