import axios from 'axios';

class ExperienceService {
  constructor(){
    let service = axios.create({
      baseURL: 'https://victor-izquierdo-site.herokuapp.com/',
      withCredentials: true
    });
    this.service = service;
  }
  
  errorHandler = (err) => {
    throw err;
  };
  
  handleUpload (theFile) {
    // console.log('file in service: ', theFile)
    return this.service.post('/upload', theFile)
    .then(res => {
      console.log(res.data)
      return res.data  
    })
    .catch(this.errorHandler);
  }
  
  saveNewExperience (newExperience) {
    return this.service.post('/profile/addExperience', newExperience)
      .then(res => res.data)
      .catch(this.errorHandler);
  }
  getExperiences = () => {
    return this.service.get('/profile/experiences')
      .then(response => response.data);
  }
  
  deleteExperience = (id) => {
    console.log(id);
    return this.service.get(`/profile/experiences/delete/${id}`)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
export default ExperienceService; 