import { AuthForm } from '../AuthForm';
import classes from './index.module.css';

export const MainPage = () => (
  <div className={classes.container}>
    <div className={classes.panel}>
      <AuthForm />
    </div>
  </div>
);
