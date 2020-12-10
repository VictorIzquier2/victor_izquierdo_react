import react from 'react';
import 'bulma/css/bulma.css'

const ExperienceForm = (props) => {
  return(
    <div>
        <h2>Experiencia</h2>
        {/*<form onSubmit={this.submitForm}>*/}
        <form onSubmit={props.submitNewExperience}>
          <label htmlFor='cargo'>Cargo </label>
          <input 
            type='text' 
            name='cargo' 
            value={props.experience.cargo} 
            onChange={(event) => props.changeHandler(event.target)}/>
          <hr/>
          <label htmlFor='empleo'>Tipo de empleo </label>
          <input 
            type='text' 
            name='empleo' 
            value={props.experience.empleo} 
            onChange={(event) => props.changeHandler(event.target)} />
          <hr/>
          <label htmlFor='empresa'>Empresa </label>
          <input 
            type='text' 
            name='empresa' 
            value={props.experience.empresa} 
            onChange={(event) => props.changeHandler(event.target)} />
          <hr/>
          <label htmlFor='ubcacion'>Ubicación </label>
          <input 
            type='text' 
            name='ubicacion' 
            value={props.experience.ubicacion} 
            onChange={(event) => props.changeHandler(event.target)} />
          <hr/>
          <label htmlFor='descripcion'>Descripcion </label>
          <input 
            type='text' 
            name='descripcion' 
            value={props.experience.descripcion} 
            onChange={(event) => props.changeHandler(event.target)} />
          <hr/>
          <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}
export default ExperienceForm;