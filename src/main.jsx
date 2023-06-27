import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupMockServer } from './mock';
import { MainPage } from './MainPage';
import './index.css';

setupMockServer();

const App = () => <MainPage />;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
