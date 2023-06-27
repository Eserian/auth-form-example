import { useState } from 'react';
import { $auth } from '../store/auth';
import { Input } from './Input';
import { PasswordInput } from './PasswordInput';
import { validateEmail, validatePassword } from './validators';
import classes from './index.module.css';

export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const hadnleSubmit = async (e) => {
    e.preventDefault();

    const newEmailError = validateEmail(email);
    const newPasswordError = validatePassword(password);

    setEmailError(newEmailError);
    setPasswordError(newPasswordError);

    if (!newPasswordError && !newEmailError) {
      try {
        setIsFetching(true);
        setFetchError(null);

        const response = await fetch('http://example.com/api/endpoint', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();

        if (data.success) {
          $auth.set(true);
        } else {
          throw new Error(data.error);
        }
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsFetching(false);
      }
    }
  };

  return (
    <form noValidate onSubmit={hadnleSubmit}>
      <div className={classes.layout}>
        <h1>Log In</h1>
        <Input
          label='Email'
          type='email'
          name='email'
          autoComplete='username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          required
        />
        <PasswordInput
          label='Password'
          name='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          required
        />
        <button className={classes.submitButton} disabled={isFetching}>
          {isFetching ? (
            <div className={classes.loader} />
          ) : (
            <span className={classes.buttonText}>Log in</span>
          )}
        </button>
        <div>{fetchError}</div>
      </div>
    </form>
  );
};
