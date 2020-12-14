import React from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';
import './assets/css/EducationForm.css';

const EducationForm = (props) => {
  return(
    <fieldset className='container'>
      <br/>
      <h4 className='title is-4'>Añadir</h4>
      <p className='subtitle is-6'>Nueva educación</p>
      <form className='form' onSubmit={(e)=>props.submitNewEducation(e)}>
        <div className='education-form is-full'>
          <div className='column is-half'>
            <div className='box'>
              <div className='field'>
                <div className='field is-normal'>
                  <label className='label' htmlFor='centro'>Centro</label>
                </div>
                <div className='control'>
                  <input
                    className='input is-small is-20'
                    type='text'
                    name='centro'
                    onChange={(e) => props.changeHandlerEducation(e)}
                  />
                </div>
              </div>
              <div className='field'>
                <div className='field is-normal'>
                  <label className='label' htmlFor='titulo'>Título</label>
                </div>
                <div className='control'>
                  <input
                    className='input is-small is-20'
                    type='text'
                    name='titulo'
                    onChange={(e) => props.changeHandlerEducation(e)}
                  />
                </div>
              </div>
              <div className='field'>
                <div className='field is-normal'>
                  <label className='label' htmlFor='disciplina'>Disciplina</label>
                </div>
                <div className='control'>
                  <input
                    className='input is-small is-20'
                    type='text'
                    name='disciplina'
                    onChange={(e) => props.changeHandlerEducation(e)}
                  />
                </div>
              </div>
              <div className='field'>
                <div className='field is-normal'>
                  <label className='label' htmlFor='ubicacion'>Ubicacion</label>
                </div>
                <div className='control'>
                  <input
                    className='input is-small is-20'
                    type='text'
                    name='ubicacion'
                    onChange={(e) => props.changeHandlerEducation(e)}
                  />
                </div>
              </div>
              <div className='field'>
                <div className='field is-normal'>
                  <label className='label' htmlFor='descripcion'>Descripción</label>
                </div>
                <div className='control'>
                  <input
                    className='input is-small is-20'
                    type='text'
                    name='descripcion'
                    onChange={(e) => props.changeHandlerEducation(e)}
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
                    onChange={(e) => props.handleFileUploadEducation(e)}
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
export default EducationForm;