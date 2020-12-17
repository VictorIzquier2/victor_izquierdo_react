import React from 'react';
import 'bulma/css/bulma.css';
import './assets/css/Globals.css';

const SignUp = (props) => {
  // const {submitSignUp, newUser, changeHandlerSignUp} = props
  return(
    <fieldset className='container'>
      <br/>
      <h4 className='title is-4'>Sign Up</h4>
      <form className='form' onSubmit={props.submitSignUp}>
        <div className='field'>
          <div className='field-label is-normal'>
            <label className='label' htmlFor='email'>Email: </label>
          </div>
          <div className='control'>
            <input
              className='input is-small'
              type='email'
              name='email'
              value={props.newUser.email}
              onChange={(event) => props.changeHandlerSignUp(event.target)}
            />
          </div>
        </div>
        <div className='field'>
          <div className='field-label is-normal'>
            <label className='label' htmlFor='username'>Username: </label>
          </div>
          <div className='control'>
            <input
              className='input is-small'
              type='text'
              name='username'
              value={props.newUser.username}
              onChange={(event) => props.changeHandlerSignUp(event.target)}
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
              value={props.newUser.password}
              onChange={(event) => props.changeHandlerSignUp(event.target)}
            />
          </div>
        </div>
        <br/>
         <div className='field'>
          <div className='field-label is-normal'>
            <strong>{props.message}</strong>
          </div>
        </div>
        <button className='button is-primary' type='submit'><strong>Sign Up</strong></button>
      </form>
      <br/>
    </fieldset>
  )
}
export default SignUp;