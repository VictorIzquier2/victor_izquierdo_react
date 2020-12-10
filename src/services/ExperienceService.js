import axios from 'axios';

class ExperienceService {
  constructor(){
    let service = axios.create({
      baseURL: 'http://localhost:3000',
      withCredentials: true
    });
    this.service = service;
  }
  getExperiences = () => {
    return this.service.get('/profile/experiences')
      .then(response => response.data);
  }

  newExperience = (cargo, empleo, empresa, ubicacion, descripcion) => {
    return this.service.post('/profile/addExperience', {cargo, empleo, empresa, ubicacion, descripcion})
      .then((response) => {
        console.log(response.data);
        return response.data
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
export default ExperienceService; 