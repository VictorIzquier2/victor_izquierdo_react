import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';
import './assets/css/Profile.css';

// COMPONENTS
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import Experience from './Experience';
import Education from './Education';

// DEPENDENCIES
//import { Link, Route, Redirect, Switch } from 'react-router-dom';
import UserService from '../services/UserService';
import ExperienceService from '../services/ExperienceService';
import EducationService from '../services/EducationService';

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
        experiencesFromDB: 0,
        education: {
          centro: '',
          titulo: '',
          disciplina: '',
          ubicacion: '',
          descripcion: '',
        },
        educationsFromDB: 0
    }
    
  }

  UserService = new UserService();
  ExperienceService = new ExperienceService();
  EducationService = new EducationService();

  getExperiencesFromDB = () => {
    return this.ExperienceService.getExperiences()
    .then((response) =>{
      console.log(response)
      this.setState({experiencesFromDB: response})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  deleteExperiencesFromDB = (event, id) => {
    event.preventDefault();
    this.ExperienceService.deleteExperience(id)
      .then(() => {
        this.getAllExperiences();
      })   
      .catch((err) => {
        console.log(err)
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
  
  submitNewExperience = (e) => {
    e.preventDefault();
    console.log(this.state.experience);
    this.ExperienceService.saveNewExperience(this.state.experience)
    .then(res => {
      console.log('added: ', res);
      this.getExperiencesFromDB();
    })
    .catch(err => {
      console.log("Error while adding the new Experience: ", err);
    });
    
  }
  
  changeHandlerExperience = (e) => {
    
    const { name, value } = e.target;
    this.setState({ experience: { ...this.state.experience, [name]: value } })
  }

  handleFileUploadExperience = e => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    this.ExperienceService.handleUpload(uploadData)
      .then(response => {
          return this.setState({ experience: { ...this.state.experience, imageUrl: response.secure_url } });
      })
      .catch(err => {
          console.log("Error while uploading the file: ", err);
      });
    }

    getEducationsFromDB = () => {
      return this.EducationService.getEducations()
        .then((response) => {
          this.setState({educationsFromDB: response})
          console.log(this.state.educationsFromDB);
        })
        .catch((err) => {
          console.log(err);
        })
    }

    deleteEducationsFromDB = (event, id) => {
      event.preventDefault();
      this.EducationService.deleteEducation(id)
        .then(() => {
          this.getAllEducations();
        })
        .catch((err) => {
          console.log(err);
        })
    }

    getAllEducations = () => {
      this.getEducationsFromDB()
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
    }

    submitNewEducation = (e) => {
      e.preventDefault();
      console.log(1);
      this.EducationService.saveNewEducation(this.state.education)
      .then(res => {
          console.log(2);
          console.log('Added: ', res);
          this.getEducationsFromDB();
        })
        .catch(err => {
          console.log("Error while adding the new Education", err);
        });
    }
  
    changeHandlerEducation = (e) => {
      const { name, value } = e.target;
      this.setState({ education: {...this.state.education, [name]: value}})
    }
  
    handleFileUploadEducation = e => {
      const uploadData = new FormData();
      uploadData.append("imageUrl", e.target.files[0]);
      this.EducationService.handleUpload(uploadData)
        .then(response => {
            return this.setState({ education: { ...this.state.education, imageUrl: response.secure_url } });
        })
        .catch(err => {
            console.log("Error while uploading the file: ", err);
        });
      }
      
  componentDidMount(){
    /*
    this.UserService.loggedin(this.props.isLogged._id)
    .then(() =>{
        */
        this.getAllExperiences();
        this.getAllEducations();
      /*
      })
      */
  }
  
  render(){
    return(
      <div className='Profile'>
          {this.props.isAdmin.username && 
            <ExperienceForm
              submitNewExperience={this.submitNewExperience}
              experience={this.state.experience}
              changeHandlerExperience={this.changeHandlerExperience}
              handleFileUploadExperience={this.handleFileUploadExperience}
            />
          }
          {this.props.isAdmin.username && 
            <EducationForm
              submitNewEducation={this.submitNewEducation}
              education={this.state.education}
              changeHandlerEducation={this.changeHandlerEducation}
              handleFileUploadEducation={this.handleFileUploadEducation}
            />
          }

        <div className='container is-widescreen is-full'>
          <div className='strengths'>
            <br/>
            <div className='experiences'>
              <h3 className='title is-3'>Experiencias</h3>
              <div className='column is-half'>
                <div className='box'>
                  {this.state.experiencesFromDB &&
                    this.state.experiencesFromDB.map((item, i) => {
                      return(
                        <Experience
                          key={i}
                          item={item}
                          isAdmin={this.props.isAdmin.username}
                          deleteExperiencesFromDB={this.deleteExperiencesFromDB}
                        />
                      )
                    })
                  }
                </div>
              </div>
              <br/>
            </div>
            <br/>
            <div className='educations'>
              <h3 className='title is-3'>Aprendizajes</h3>
              <div className='column is-half'>
                <div className='box'>
                  {this.state.educationsFromDB &&
                    this.state.educationsFromDB.map((item, i) => {
                      return(
                        <Education
                          key={i}
                          item={item}
                          isAdmin={this.props.isAdmin.username}
                          deleteEducationsFromDB={this.deleteEducationsFromDB}
                        />
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile; 