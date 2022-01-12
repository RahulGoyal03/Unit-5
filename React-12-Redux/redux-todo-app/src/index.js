import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './Redux/AppContextProvider';
import {store} from "./Redux/store"
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider store={store}>
    <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


