import { useState } from 'react';
import { Input } from '../Input';
import { EyeIcon } from './EyeIcon';
import { EyeCloseIcon } from './EyeCloseIcon';
import classes from './index.module.css';

export const PasswordInput = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Input
      type={showPassword ? 'text' : 'password'}
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
      {...props}
    />
  );
};
