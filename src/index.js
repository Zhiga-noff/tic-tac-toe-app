import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppClass } from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppClass />
  </Provider>,
);
