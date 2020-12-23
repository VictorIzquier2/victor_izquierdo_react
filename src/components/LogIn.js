import React from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';

const LogIn = (props) => {
  // Const {submitLogIn, loggingUser, changeHandlerLogIn} = props
  return(
    <fieldset className='container'>
      <br/>
      <h4 className='title is-4'>Log In</h4>
      <form className='form' onSubmit={props.submitLogIn}>
        <div className='field'>
          <div className='field-label is-normal'>
            <label className='label' htmlFor='username'>Username: </label>
          </div>
          <div className='control'>
            <input
              className='input is-small'
              type='text'
              name='username'
              value={props.loggingUser.username}
              onChange={(event) => props.changeHandlerLogIn(event.target)}
            />
          </div>
        </div>
        <div className='field'>
          <div className='field-label is-normal'>
            <label className='label' htmlFor='password'>Password: </label>
          </div>
          <div className='control'>
            <input
              className='input is-small'
              type='password'
              name='password'
              value={props.loggingUser.password}
              onChange={(event) => props.changeHandlerLogIn(event.target)}
            />
          </div>
        </div>
        <br/>
        <div className='field'>
          <div className='field-label is-normal'>
            <strong>{props.message}</strong>
          </div>
        </div>
        <button className='button is-primary' type='submit'><strong>Log In</strong></button>
      </form>
      <br/>
      <form className='form' onSubmit={props.submitLogInWithSlack}>
        <button className='button is-light' type='submit'><strong>Log In with Slack</strong></button>
      </form>
      <br/>
    </fieldset>
  )
}
export default LogIn; 