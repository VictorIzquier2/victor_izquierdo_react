import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';
import './assets/css/Gallery.css';

// COMPONENTS
import ProjectForm from './ProjectForm';
import Project from './Project';

// DEPENDENCIES
import ProjectService from '../services/ProjectService';

class Gallery extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      project: {
        titulo: '',
        tecnologia: '',
        descripcion: ''
      },
      projectsFromDB: 0
    }
  }

  ProjectService = new ProjectService();

  getProjectsFromDB = () => {
    return this.ProjectService.getProjects()
      .then((response) => {
        this.setState({projectsFromDB: response})
      })
      .catch((err) => {
        console.log(err);
      })
  }

  deleteProjectsFromDB = (event, id) => {
    event.preventDefault();
    this.ProjectService.deleteProject(id)
      .then(() => {
        this.getAllProjects();
      })
      .catch((err) => {
        console.log(err)
      })
  }
  getAllProjects = () => {
    this.getProjectsFromDB()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  submitNewProject = (e) => {
    e.preventDefault();
    this.ProjectService.saveNewProject(this.state.project)
      .then(res => {
        console.log('added: ', res);
        this.getProjectsFromDB();
      })
      .catch(err => {
        console.log('Error while adding the new Project; ', err);
      });
  }
  
  changeHandlerProject = (e) => {
    const {name, value } = e.target;
    this.setState({ project: { ...this.state.project, [name] : value } })
  }

  handleFileUploadProject = e => {
    const uploadData = new FormData();
    uploadData.append('imageUrl', e.target.files[0]);
    this.ProjectService.handleUpload(uploadData)
      .then(response => {
        return this.setState({ project: { ...this.state.project, imageUrl: response.secure_url } });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  }

  componentDidMount(){
    this.getAllProjects();
  }

  render(){
    return(
      <div className='Gallery'>
        {this.props.isAdmin.username &&
          <ProjectForm
            submitNewProject={this.submitNewProject}
            project={this.state.project}
            changeHandlerProject={this.changeHandlerProject}
            handleFileUploadProject={this.handleFileUploadProject}
          />
        }
        <div className='container is-widescreen is-full'>
          <br/>
          <div className='sections is-full'>
            <section className='section'>
              <h3 className='title is-3'>Galería</h3>
              <div className='box'>
                <div className='projects'>
                  {this.state.projectsFromDB &&
                    this.state.projectsFromDB.map((item, i) => {
                      return(
                        <Project
                          key={i}
                          item={item}
                          isAdmin={this.props.isAdmin.username}
                          deleteProjectsFromDB={this.deleteProjectsFromDB}
                        />
                      )
                    })
                  }
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
export default Gallery;