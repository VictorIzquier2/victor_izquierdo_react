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
  isAdmin = () => {
    return this.service.get('/isadmin')
      .then(response => response.data);
  }
}

export default UserService; 