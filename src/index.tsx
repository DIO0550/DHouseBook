import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';

import { RecoilRoot } from 'recoil';
import App from './App';
import store from './stores/store';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Provider store={store}>
        <App />
      </Provider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
