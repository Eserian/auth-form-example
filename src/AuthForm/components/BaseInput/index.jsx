import { useState } from 'react';
import cn from 'classnames';
import classes from './index.module.css';

export const BaseInput = ({
  label,
  error,
  rightAddon,
  value,
  onFocus,
  onBlur,
  onChange,
  name,
  ...restProps
}) => {
  const [focused, setFocused] = useState(false);

  const handleInputFocus = (event) => {
    setFocused(true);

    if (onFocus) {
      onFocus(event);
    }
  };

  const handleInputBlur = (event) => {
    setFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <label className={classes.inputWrapper}>
      <input
        className={cn(classes.input, { [classes.filledInput]: value })}
        value={value}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={onChange}
        name={name}
        {...restProps}
        {...(error && { 'aria-invalid': 'true' })}
        {...(error && { 'aria-errormessage': `${name}-error` })}
      />
      <span className={cn(classes.labelText, { [classes.labelTextFocus]: focused || value })}>
        {label}
      </span>
      {rightAddon && <div className={classes.addon}>{rightAddon}</div>}
      {error && (
        <div id={`${name}-error`} className={classes.error} role='alert'>
          {error}
        </div>
      )}
    </label>
  );
};
