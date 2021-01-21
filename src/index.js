import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './redux/reducers/index';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);