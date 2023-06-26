import { useState } from 'react';
import { EmailInput } from './components/EmailInput';
import { PasswordInput } from './components/PasswordInput';
import { validateEmail, validatePassword } from './validators';
import classes from './index.module.css';

export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const hadnleSubmit = (e) => {
    e.preventDefault();

    const newEmailError = validateEmail(email);
    const newEasswordError = validatePassword(password);

    setEmailError(newEmailError);
    setPasswordError(newEasswordError);

    console.log(email, password);
  };

  return (
    <form noValidate onSubmit={hadnleSubmit}>
      <div className={classes.layout}>
        <h1>Log In</h1>
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} error={emailError} />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
        <button className={classes.submitButton}>
          <span className={classes.buttonText}>Log in</span>
        </button>
      </div>
    </form>
  );
};
