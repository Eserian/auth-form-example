import { useState } from 'react';
import { BaseInput } from '../BaseInput';
import { EyeIcon } from './EyeIcon';
import { EyeCloseIcon } from './EyeCloseIcon';
import classes from './index.module.css';

export const PasswordInput = ({ value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <BaseInput
      label='Password'
      type={showPassword ? 'text' : 'password'}
      name='password'
      autoComplete='current-password'
      value={value}
      onChange={onChange}
      error={error}
      required
      rightAddon={
        <button
          className={classes.showPasswordButton}
          type='button'
          aria-label='Show password'
          onClick={toggleShowPassword}
        >
          {showPassword ? <EyeCloseIcon /> : <EyeIcon />}
        </button>
      }
    />
  );
};
