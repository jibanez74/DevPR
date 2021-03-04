import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import { Provider } from 'react-redux';
import store from './store';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import App from './App';

Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
