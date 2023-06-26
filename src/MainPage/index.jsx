import { useStore } from '@nanostores/react';
import { AuthForm } from '../AuthForm';
import { $auth } from '../store/auth';
import classes from './index.module.css';

export const MainPage = () => {
  const auth = useStore($auth);

  return (
    <div className={classes.container}>
      <div className={classes.panel}>
        {!auth ? <AuthForm /> : <div>Successfully authenticated!</div>}
      </div>
    </div>
  );
};
