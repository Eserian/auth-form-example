import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupMockWorker } from './mock';
import { MainPage } from './MainPage';
import './index.css';

export const runApp = () => {
  setupMockWorker();

  const App = () => <MainPage />;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

runApp();
