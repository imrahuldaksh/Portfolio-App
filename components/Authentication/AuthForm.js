import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBosNSB49iWH5vFfvbgIjWFWb-UhwLjAyA';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBosNSB49iWH5vFfvbgIjWFWb-UhwLjAyA';
    }
    fetch(url,
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(res => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(data => {
            //show an error modal
            let errorMessage = 'Authentication failed';
            throw new Error(errorMessage);
          });
        }
      })
      .then(data=> {
        console.log(data);
        authCtx.login(data);
        history.replace('/');
      })
      .catch(err => {console.log(err.message)});

    }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInput} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
