import axios from 'axios';

class ProjectService {
  constructor(){
    let service = axios.create({
      baseURL: 'https://victor-izquierdo-site.herokuapp.com',
      withCredentials: true
    });
    this.service = service;
  }

  errorHandler = (err) => {
    throw err;
  }

  handlerUpload(theFile){
    
    return this.service.post('upload', theFile)
      .then(res => {
        console.log(res.data)
        return res.data;
      })
      .catch(this.errorHandler);
  }

  saveNewProject(newProject) {
    return this.service.post('/gallery/addProject', newProject)
      .then(res => res.data)
      .catch(this.errorHandler);
  }

  getProjects = () => {
    return this.service.get('/gallery/projects')
      .then(response => response.data);
  }

  deleteProject = (id) => {
    console.log(id);
    return this.service.get(`/gallery/projects/delete/${id}`)
    .then((response) => {
      console.log(response.data)
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
export default ProjectService;