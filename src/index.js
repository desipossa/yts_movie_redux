import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css'
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
