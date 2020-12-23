import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';
import './assets/css/Header.css';
import logo from './assets/images/victor-izquierdo-logo-oficial.svg'
// COMPONENTS
import SignUp from './SignUp';
import LogIn from './LogIn';
import Home from './Home';
import Profile from './Profile';
import Gallery from './Gallery';

// DEPENDENCIES
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import UserService from '../services/UserService';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLogged: {},
      isAdmin: {},
      newUser: {username: '', email: '', password: ''},
      loggingUser: { username: '', password: '' },
      loggingMessage: '',
      signupMessage: '',
      loggins: 0,
    }
  }
  
    service = new UserService();

  //SIGNUP CONFIG
  submitSignUp = (event) => {
    event.preventDefault();
    this.service
      .signup(this.state.newUser.username, this.state.newUser.email, this.state.newUser.password)
        .then((result) => {
          if(result.message){
            this.setState({signupMessage: result.message});
          }
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        })
  }; 

  changeHandlerSignUp = (_eventTarget) => {
    this.setState({newUser: {...this.state.newUser, [_eventTarget.name]: _eventTarget.value}});
  };
  
  //LOGIN CONFIG
  submitLogIn = (event) => {
    event.preventDefault();
    this.service
    .login(this.state.loggingUser.username, this.state.loggingUser.password)
    .then((response) => {
      const upLogin = this.state.loggins + 1;
      if(response.message){
            this.setState({loggingMessage: response.message});
          }
          if(response.role === 'ADMIN'){
            this.setState({isAdmin: response, isLogged: response});
          }else{
            this.setState({isLogged: response});
            this.setState({loggins: upLogin});
          }
          this.checkIfLoggedIn();
          //this.checkIfAdmin();
        })
        .catch((err) => {
          console.log('Sorry something went wrong on submit', err);
        });
  };

  changeHandlerLogIn = (_eventTarget) => {
    this.setState({loggingUser: {...this.state.loggingUser, [_eventTarget.name]: _eventTarget.value}});
  };

  checkIfLoggedIn = () => {
    this.service.loggedin()
      .then((result) => {
        this.setState({isLogged: result})
        this.setState({loggingMessage: ''})
        this.setState({signupMessage: ''})
      })
  };

  checkIfAdmin = () => {
    this.service.isAdmin()
      .then((result) => {
        this.setState({isAdmin: result})
      })
  }

  logOut = (event) => {
    this.service
      .logout(this.state.loggins)
        .then((result) =>  {
          console.log(result);
          //this.checkIfLoggedIn();
          this.setState({isLogged: {}, isAdmin: {}});
        })
        .catch((err) => {
          console.log(err);
        })
  }
  
  componentDidMount() {
    this.checkIfLoggedIn();
    this.checkIfAdmin();
  }
  
  render(){
    return(
      <header className='site-header is-full'>
            <nav className='navbar is-light' role='navigation' aria-label='main navigation'>
              <div className='navbar-brand'>
                <Link className='navbar-item' to='/'>
                  <img src={logo} alt='bulma' width="112" height="28"/>
                </Link>
                <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicMenu">
                  <span aria-hidden='true'></span>
                  <span aria-hidden='true'></span>
                  <span aria-hidden='true'></span>
                </button>
              </div>
              <div id='navbarBasicMenu' className='navbar-menu'>
                <div className='navbar-start'>
                  <Link className='navbar-item' to='/'><strong>Home</strong></Link>
                  <Link className='navbar-item' to='/profile'><strong>Profile</strong></Link>
                  <Link className='navbar-item' to='/gallery'><strong>Gallery</strong></Link>
                  <div className='navbar-item has-dropdown is-hoverable'>
                    {/* 
                    <Link className='navbar-link' to='#'>
                      More
                    </Link>
                    */}
                    <div className='navbar-dropdown'>
                      {/*
                      <Link className='navbar-item' to='#'>
                        About
                      </Link>
                      <Link className='navbar-item' to='#'>
                        Jobs
                      </Link>
                      <Link className='navbar-item' to='#'>
                        Contact
                      </Link>
                      <hr className='navbar-divider'/>
                      <Link className='navbar-item' to='#'>
                        Report an issue
                      </Link>
                      */}
                    </div>
                  </div>
                </div>
                <div className='navbar-end'>
                  <div className='navbar-item'>
                    <div className='buttons'>
                      <strong className='mx-2'>
                        {!this.state.isLogged.username && <Link className='button is-primary' to='/signup'>Sign Up</Link>}
                      </strong>
                      <strong className='mx-2'>
                        {!this.state.isLogged.username && <Link className='button is-light' to='/login'>Log In</Link>}
                      </strong>
                      {this.state.isLogged.username && <button className='button is-light is-small' onClick={() => this.logOut()}><strong>Log Out</strong></button>}
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <Switch>
              <Route 
                exact 
                path='/' 
                render={() => <Home 
                                logOut={this.logOut} 
                                isLogged={this.state.isLogged}
                              />
                }
              />
              <Route
                exact
                path='/gallery'
                render={() => <Gallery
                                logOut={this.logOut}
                                isLogged={this.state.isLogged}
                                isAdmin={this.state.isAdmin}
                              />
                
                }
              />
              <Route
                exact
                path='/signup'
                render={() => (
                  !this.state.isLogged.username
                  ? <SignUp 
                      submitSignUp={this.submitSignUp}
                      newUser={this.state.newUser}
                      changeHandlerSignUp={this.changeHandlerSignUp}
                      message={this.state.signupMessage}
                    />
                  : <Redirect to='/' />
                )}
              />
              <Route
                path='/login'
                render={() => (
                  <LogIn
                    submitLogIn={this.submitLogIn}
                    loggingUser={this.state.loggingUser}
                    changeHandlerLogIn={this.changeHandlerLogIn}
                    message={this.state.loggingMessage}
                  />
                )}
              />
                <Route
                exact
                path='/profile'
                render={() => (
                  <Profile
                    logOut={this.logOut}
                    isLogged={this.state.isLogged}
                    isAdmin={this.state.isAdmin}
                  />
                )}
              />
            </Switch>
          </header>
          
    )
  }

}

export default Header;