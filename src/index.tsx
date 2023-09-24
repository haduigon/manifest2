import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import 'bulma/css/bulma.css';
import { AppContextProvider } from './components/AppContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <AppContextProvider>
    <App />
  </AppContextProvider>
    
  //  </React.StrictMode>
);


