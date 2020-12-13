import React from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';
import './assets/css/ExperienceForm.css';

const ExperienceForm = (props) => {
  return(
    <fieldset className='container'>
      <br/>
      <h4 className='title is-4'>Añadir</h4>
      <p className='subtitle is-6'>Nueva experiencia</p>
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
                  onChange={(e) => props.changeHandlerExperience(e)}
                />
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
                  onChange={(e) => props.changeHandlerExperience(e)}
                />
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
                onChange={(e) => props.changeHandlerExperience(e)}
              />
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
                  onChange={(e) => props.changeHandlerExperience(e)}
                />
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
                  onChange={(e) => props.changeHandlerExperience(e)}
                />
              </div>
            </div>
            <div className='field'>
              <div className='field is-normal'>
                <label className='label' htmlFor='imageUrl'>Imagen </label>
              </div>
            <div className='control'>
              <input
                className='input is-small is-20'
                type='file' 
                name='imageUrl' 
                onChange={(e) => props.handleFileUploadExperience(e)}
              />
            </div>
          </div>
        <button type='submit'>Publicar</button>
        <div className='field'>
          <br/>
        </div>
      </form>
    </fieldset>
  )
}
export default ExperienceForm;