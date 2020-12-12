import React from 'react';

const LogIn = (props) => {
  // Const {submitLogIn, loggingUser, changeHandlerLogIn} = props
  return(
    <fieldset className='container'>
      <br/>
      <h4 className='title is-4'>Log In</h4>
      <form className='form' onSubmit={props.submitLogIn}>
        <div className='field'>
          <div className='field-label is normal'>
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
          <div className='field-label is normal'>
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
        <button className='button is-light' type='submit'><strong>Log In</strong></button>
      </form>
    </fieldset>
  )
}
export default LogIn; 