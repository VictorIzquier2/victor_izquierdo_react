import React from 'react';
import 'bulma/css/bulma.css'

// COMPONENTS
import ExperienceForm from './ExperienceForm';

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
    experiencesFromDB: 0
  }

  service = new UserService();

  
  getExperiencesFromDB = () => {
    return this.service.getExperiences()
    .then((response) =>{
      console.log(response)
      this.setState({experiencesFromDB: response})
      console.log(this.state.experiencesFromDB);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  deleteExperiencesFromDB = (event, id) => {
    event.preventDefault();
    this.service.deleteExperience(id)
      .then(() => {
        this.service.getExperiences()
          .then((response)=> {
             this.setState({experiencesFromDB: response})
          })          
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getAllExperiences = () => {
    this.getExperiencesFromDB()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount(){
    this.getAllExperiences();
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

  experiencia = () => {
    return this.state.experiencesFromDB.map((item)=>{
      return (
          <div className='column is-half'>
            <div className='box'>
            <article className='media'>
              <div className='media-left'>
                <figure className='image is-64x64'>
                  <img src='https://bulma.io/images/placeholders/64x64.png'/>
                </figure>
              </div>
              <div className='media-content'>
                  <p><strong>{item.cargo}</strong> <small>{item.empleo} en {item.empresa}</small></p>
                  <p>{item.descripcion}</p>
                  <p><small>{item.ubicacion}</small></p>
                <form onSubmit={(event)=>this.deleteExperiencesFromDB(event, item._id)}
                >
                    <button type='submit'>Delete</button>
                </form>                
              </div>
            </article>
            </div>
          </div>
      )
    })
  }
  
  render(){
    return(
      <div className='Profile'>
        <ExperienceForm
          submitNewExperience={this.submitNewExperience}
          experience={this.state.experience}
          changeHandler={this.changeHandler}
         />
        <div className='container is-widescreen is-full'>
          <div className='columns is-full'>
            {this.state.experiencesFromDB && this.experiencia()}
          </div>
        </div>

      </div>
    )
  }
}
export default Profile; 