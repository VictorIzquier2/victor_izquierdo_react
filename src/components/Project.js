import React from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';

const Project = (props) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='is-4by3'>
          <img src={props.item.imageUrl} alt='1280x960'/>
        </figure>
      </div>
      <div class='card-content'>
        <div className='media'>
          {/*
          <div className='media-left'>
            <figure className='image is-48x48'>
              <img src='https://bulma.io/images/placeholders/96x96.png' alt='48x48' />
            </figure>
          </div>
          */}
          <div className='media-content'>
            <p className='title is-4'><strong>{props.item.titulo}</strong></p>
            <p className='subtitle is-6'>{props.item.tecnologia}</p>
          </div>
        </div>
        <div className='content'>
          <p className='has-text-left'>{props.item.descripcion}</p>
          {props.isAdmin &&
            <form onSubmit={(event) => props.deleteEducationsFromDB(event, props.item._id)}>
              <br/>
              <button className='button is-danger' type='submit'>Delete</button>
            </form>
          }
          <br/>
          {/*<time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>*/}
        </div>
      </div>
    </div>
  )
}
export default Project;