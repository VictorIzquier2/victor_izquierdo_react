import axios from 'axios';

class UserService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000',
      withCredentials: true
    });
    this.service = service;
  }
  signup = (username, email, password) => {
    return this.service.post('/signup', {username, email, password})
    .then(response => response.data);
  }
  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }
  loggedin = () => {
    return this.service.get('/loggedin')
      .then(response => response.data);
  }
  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }
  newExperience = (cargo, empleo, empresa, ubicacion, descripcion) => {
    return this.service.post('/profile/newExperience', {cargo, empleo, empresa, ubicacion, descripcion})
      .then((response) => {
        console.log(response.data);
        return response.data
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export default UserService; 