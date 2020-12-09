import React from 'react';
import ExperienceService from '../services/ExperienceService';

class Profile extends React.Component {

  state = {
    experience: {
      cargo: '',
      empleo: '',
      empresa: '',
      ubicacion: '',
      descripcion: ''
    }
  }

  service = new ExperienceService();
  /*
  submitForm = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state.experience)
    })
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  } 
  */
  
 submitNewExperience = (event) => {
   event.preventDefault();
   this.service.newExperience(this.state.experience.cargo, this.state.experience.empleo, this.state.experience.empresa, this.state.experience.ubicacion, this.state.experience.descripcion)
   .then((result) => {
     console.log(result);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  changeHandler = (_eventTarget) => {
    //console.log(_eventTarget.name)
      this.setState({experience: {...this.state.experience, [_eventTarget.name]: _eventTarget.value}})
  }
  
  render(){
    return(
      <div className='Profile'>
        <h1>Experiencia</h1>
        <hr/>
        {/*<form onSubmit={this.submitForm}>*/}
        <form onSubmit={this.submitNewExperience}>
          <label htmlFor='cargo'>Cargo </label>
          <input type='text' name='cargo' value={this.state.experience.cargo} onChange={(event) => this.changeHandler(event.target)}/>
          <hr/>
          <label htmlFor='empleo'>Tipo de empleo </label>
          <input type='text' name='empleo' value={this.state.experience.empleo} onChange={(event) => this.changeHandler(event.target)} />
          <hr/>
          <label htmlFor='empresa'>Empresa </label>
          <input type='text' name='empresa' value={this.state.experience.empresa} onChange={(event) => this.changeHandler(event.target)} />
          <hr/>
          <label htmlFor='ubcacion'>Ubicación </label>
          <input type='text' name='ubicacion' value={this.state.experience.ubicacion} onChange={(event) => this.changeHandler(event.target)} />
          <hr/>
          <label htmlFor='descripcion'>Descripcion </label>
          <input type='text' name='descripcion' value={this.state.experience.descripcion} onChange={(event) => this.changeHandler(event.target)} />
          <hr/>
          <button type='submit'>Enviar </button>
        </form>
      </div>
    )
  }
}
export default Profile; 