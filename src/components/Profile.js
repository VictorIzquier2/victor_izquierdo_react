import React from 'react';
import 'bulma/css/bulma.css'

// COMPONENTS
import ExperienceForm from './ExperienceForm';
import Experiences from './Experiences';

// DEPENDENCIES
//import { Link, Route, Redirect, Switch } from 'react-router-dom';
import UserService from '../services/ExperienceService';

class Profile extends React.Component {

  state = {
    experience: {
      cargo: '',
      empleo: '',
      empresa: '',
      ubicacion: '',
      descripcion: ''
    },
    experiencesFromDB: {}
  }

  service = new UserService();

  
  getExperiencesFromDB = () => {
    return this.service.getExperiences()
    .then((response) =>{
      this.setState({experiencesFromDB: response})
      console.log(this.state.experiencesFromDB);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  componentDidMount(){
    this.getExperiencesFromDB()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  submitNewExperience = (event) => {
   event.preventDefault();
   this.service.newExperience(this.state.experience.cargo, this.state.experience.empleo, this.state.experience.empresa, this.state.experience.ubicacion, this.state.experience.descripcion)
   .then((result) => {
     console.log(result);
     this.getExperiencesFromDB();
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
        <ExperienceForm
          submitNewExperience={this.submitNewExperience}
          experience={this.state.experience}
          changeHandler={this.changeHandler}
         />
         {this.state.experiencesFromDB !== 'undefined' ?
           <Experiences getExperiences={this.state.experiencesFromDB}/> :
           null
         }

      </div>
    )
  }
}
export default Profile; 