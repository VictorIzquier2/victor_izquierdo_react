import axios from 'axios';

class ExperienceService {
  constructor(){
    let service = axios.create({
      baseURL: 'http://localhost:3000',
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
  
  saveNewThing (newThing) {
    // console.log('new thing is: ', newThing)
    return this.service.post('/profile/addExperience', newThing)
      .then(res => res.data)
      .catch(this.errorHandler);
  }
  getExperiences = () => {
    return this.service.get('/profile/experiences')
      .then(response => response.data);
  }
  
  //newExperience = (cargo, empleo, empresa, ubicacion, descripcion) => {
    //return this.service.post('/profile/addExperience', {cargo, empleo, empresa, ubicacion, descripcion})
      //.then((response) => {
        //console.log(response.data);
        //return response.data
      //})
      //.catch((err) => {
        //console.log(err);
      //})
  //}

  deleteExperience = (id) => {
    console.log(id);
    return this.service.post('/profile/experiences/delete', {id})
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