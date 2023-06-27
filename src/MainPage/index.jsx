import { useStore } from '@nanostores/react';
import { AuthForm } from '../AuthForm';
import { $auth } from '../store/auth';
import classes from './index.module.css';

export const MainPage = () => {
  const auth = useStore($auth);

  const handleLogout = () => $auth.set(false);

  return (
    <div className={classes.container}>
      <div className={classes.panel}>
        {!auth ? (
          <AuthForm />
        ) : (
          <div className={classes.centred}>
            <h2>Successfully authenticated!</h2>
            <button className={classes.logoutButton} onClick={handleLogout}>
              <span className={classes.buttonText}>Log Out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
