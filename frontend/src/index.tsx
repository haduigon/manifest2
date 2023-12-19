import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import 'bulma/css/bulma.css';
import { AppContextProvider } from './components/AppContext';
import { Root } from './components/Root';
import './styles/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  // <AppContextProvider>
    <Root />,
  // </AppContextProvider>
    
  //  </React.StrictMode>
);


