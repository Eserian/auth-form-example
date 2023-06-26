import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './MainPage';
import './index.css';

const App = () => <MainPage />;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
