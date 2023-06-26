import { BaseInput } from '../BaseInput';

export const EmailInput = ({ value, onChange, error }) => (
  <BaseInput
    label='Email'
    type='email'
    name='email'
    autoComplete='username'
    value={value}
    onChange={onChange}
    error={error}
    required
  />
);
