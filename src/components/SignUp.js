import React from 'react';
import 'bulma/css/bulma.css';

const SignUp = (props) => {
  // const {submitSignUp, newUser, changeHandlerSignUp} = props
  return(
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={props.submitSignUp}>
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          name='email'
          value={props.newUser.email}
          onChange={(event) => props.changeHandlerSignUp(event.target)}
        />
        <label htmlFor='username'>Username: </label>
        <input
          type='text'
          name='username'
          value={props.newUser.username}
          onChange={(event) => props.changeHandlerSignUp(event.target)}
        />
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          name='password'
          value={props.newUser.password}
          onChange={(event) => props.changeHandlerSignUp(event.target)}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}
export default SignUp;