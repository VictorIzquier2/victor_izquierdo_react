import React from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';

const Education = (props) => { 
    return (
      <article id={'education' + props.key} className='media'>
        <div className='media-left'>
          <figure className='image is-64x64'>
            <img src={props.item.imageUrl} alt={'Education' + props.key}/>
          </figure>
        </div>
        <div className='media-content'>
          <p><strong>{props.item.titulo}</strong> <small>{props.item.disciplina} en {props.item.centro}</small></p>
          <p className='has-text-left'>{props.item.descripcion}</p>
          <br/>
          <p><small><strong>{props.item.ubicacion}</strong></small></p>  
          {props.isAdmin &&
            <form onSubmit={(event)=>props.deleteExperiencesFromDB(event, props.item._id)}>
              <br/>
              <button className='button is-danger' type='submit'>Delete</button>
            </form>
          }
          <br/>          
        </div>
      </article>
    )
}
export default Education;