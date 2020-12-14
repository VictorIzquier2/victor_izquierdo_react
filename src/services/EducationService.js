import axios from 'axios';

class EducationService {
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

  handleUpload(theFile) {
    return this.service.post('/upload', theFile)
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(this.errorHandler);
  }

  saveNewEducation (newEducation) {
    return this.service.post('/profile/addEducation', newEducation)
      .then(res => res.data)
      .catch(this.errorHandler);
  }
  
  getEducations = () => {
    return this.service.get('/profile/educations')
      .then(response => response.data);
  }
  
  deleteEducation = (id) => {
    console.log(id);
    return this.service.get(`/profile/educations/delete/${id}`)
      .then((response) => {
        console.log(response.data)
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
export default EducationService;