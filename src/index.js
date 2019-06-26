import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import theme from './theme';
import store from './store';
import browserHistory from './store/history';


ReactDOM.render(
  (<Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={browserHistory}>
        <App/>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>),
  document.getElementById('root')
);
