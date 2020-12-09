import React from 'react';
import 'bulma/css/bulma.css'

// COMPONENTS
import ProfesionalXP from './ProfesionalXP';

// DEPENDENCIES
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import UserService from '../services/UserService';

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

  service = new UserService();

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
        <ProfesionalXP
          submitNewExperience={this.submitNewExperience}
          experience={this.state.experience}
          changeHandler={this.changeHandler}
         />
      </div>
    )
  }
}
export default Profile; 