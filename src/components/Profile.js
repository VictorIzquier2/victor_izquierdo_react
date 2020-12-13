import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';

// COMPONENTS
import ExperienceForm from './ExperienceForm';
import Experiences from './Experiences';

// DEPENDENCIES
//import { Link, Route, Redirect, Switch } from 'react-router-dom';
import UserService from '../services/ExperienceService';

class Profile extends Component {

  constructor(props){
    super(props);
      this.state = {
        experience: {
          cargo: '',
          empleo: '',
          empresa: '',
          ubicacion: '',
          descripcion: ''
        },
        experiencesFromDB: 0
    }

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
  
  submitNewExperience = (e) => {
   e.preventDefault();

    this.service.saveNewExperience(this.state.experience)
      .then(res => {
          console.log('added: ', res);
          // here you would redirect to some other page 
      })
      .catch(err => {
          console.log("Error while adding the thing: ", err);
      });

  }

  changeHandler = (e) => {

    const { name, value } = e.target;
    this.setState({ experience: { ...this.state.experience, [name]: value } })
  }

  handleFileUpload = e => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    this.service.handleUpload(uploadData)
      .then(response => {
          return this.setState({ experience: { ...this.state.experience, imageUrl: response.secure_url } });
      })
      .catch(err => {
          console.log("Error while uploading the file: ", err);
      });
    }
  
  render(){
    return(
      <div className='Profile'>
          {this.props.isAdmin.username && 
            <ExperienceForm
              submitNewExperience={this.submitNewExperience}
              experience={this.state.experience}
              changeHandler={this.changeHandler}
              handleFileUpload={this.handleFileUpload}
            />
          }

        <div className='container is-widescreen is-full'>
          <div className='columns is-full'>
            {this.state.experiencesFromDB && 
            <Experiences
              experiencesFromDB={this.state.experiencesFromDB}
              deleteExperiencesFromDB={this.deleteExperiencesFromDB}
            />
            }
          </div>
        </div>

      </div>
    )
  }
}
export default Profile; 