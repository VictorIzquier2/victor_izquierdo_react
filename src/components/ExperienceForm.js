import React from 'react';
import 'bulma/css/bulma.css';
import './css/ExperienceForm.css'

const ExperienceForm = (props) => {
  return(
    <fieldset className='container'>
      <h4 className='title is-4'>Añadir</h4>
      <p className='subtitle is-6'>Nueva experiencia</p>
      {/*<form onSubmit={this.submitForm}>*/}
      <form className='form' onSubmit={(e)=>props.submitNewExperience(e)}>
        <div className='columns is-full'>
          <div className='column is-half'>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
              <label className='label' htmlFor='cargo'>Cargo</label>
              </div>
              <div className='control'>
                <input
                  className='input is-small is-20'
                  type='text' 
                  name='cargo' 
                  //value={props.experience.cargo} 
                  onChange={(e) => props.changeHandler(e)}/>
              </div>
            </div>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className='label' htmlFor='empleo'>Empleo </label>
              </div>
              <div className='control'>
                <input 
                  className='input is-small is-20'
                  type='text' 
                  name='empleo' 
                  //value={props.experience.empleo} 
                  onChange={(e) => props.changeHandler(e)} />
              </div>
            </div>
          </div>
          <div className='column is-half'>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className='label' htmlFor='empresa'>Empresa </label>
              </div>
              <div className='control'>
              <input 
                className='input is-small is-20'
                type='text' 
                name='empresa' 
                //value={props.experience.empresa} 
                onChange={(e) => props.changeHandler(e)} />
              </div>
            </div>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className='label' htmlFor='ubicacion'>Ubicación </label>
              </div>
              <div className='control'>
                <input 
                  className='input is-small is-20'
                  type='text' 
                  name='ubicacion' 
                  //value={props.experience.ubicacion} 
                  onChange={(e) => props.changeHandler(e)} />
              </div>
            </div>
          </div>
        </div>
            <div className='field'>
              <div className='field is-normal'>
                <label className='label' htmlFor='descripcion'>Descripcion </label>
              </div>
              <div className='control'>
                <textarea
                  className='input textarea is-small is-20'
                  type='text' 
                  name='descripcion' 
                  //value={props.experience.descripcion} 
                  onChange={(e) => props.changeHandler(e)} />
              </div>
            </div>
            <div className='field'>
              <div className='field is-normal'>
                <label className='label' htmlFor='imageUrl'>Descripcion </label>
              </div>
              <div className='control'>
                <input
                  className='input is-small is-20'
                  type='file' 
                  name='imageUrl' 
                  onChange={(e) => props.handleFileUpload(e)} />
              </div>
            </div>
          <button type='submit'>Enviar</button>
          <div className='field'>
            <br/>
          </div>
        </form>
    </fieldset>
  )
}
export default ExperienceForm;