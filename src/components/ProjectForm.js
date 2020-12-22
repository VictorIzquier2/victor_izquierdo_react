import React from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';
import './assets/css/ProjectForm.css';

const ProjectForm = (props) => {
  return(
    <fieldset className='container'>
      <br/>
      <h4 className='title is-4'>Añadir</h4>
      <p className='subtitle is-6'>Nuevo projecto</p>
      <form className='form' onSubmit={(e)=>props.submitNewProject(e)}>
        <div className='project-form is-full'>
          <div className='column is-half'>
            <div className='box'>
              <div className='field'>
                <div className='field is-normal'>
                  <label className='label' htmlFor='titulo'>Titulo</label>
                </div>
                <div className='control'>
                  <input
                    className='input is-small is-20'
                    type='text'
                    name='titulo'
                    onChange={(e) => props.changeHandlerProject(e)}
                  />
                </div>
              </div>
              <div className='field'>
                <div className='field is-normal'>
                  <label className='label' htmlFor='tecnologia'>Tecnologia</label>
                </div>
                <div className='control'>
                  <input
                    className='input is-small is-20'
                    type='text'
                    name='tecnologia'
                    onChange={(e) => props.changeHandlerProject(e)}
                  />
                </div>
              </div>
              <div className='field'>
                <div className='field is-normal'>
                  <label className='label' htmlFor='descripcion'>Descripcion</label>
                </div>
                <div className='control'>
                  <textarea
                    className='input textarea is-small is-20'
                    type='text'
                    name='descripcion'
                    onChange={(e) => props.changeHandlerProject(e)}
                  />
                </div>
              </div>
              <div className='field'>
                <div className='field is-normal'>
                  <label className='label' htmlFor='imageUrl'>Imagen</label>
                </div>
                <div className='control'>
                  <input
                    className='input is-small is-20'
                    type='file'
                    name='imageUrl'
                    onChange={(e) => props.handleFileUploadProject(e)}
                  />
                </div>
                <br/>
                <div className='field'>
                  <div className='control'>
                    <button type='submit'>Publicar</button>
                  </div>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>     
    </fieldset>
  )
}
export default ProjectForm;