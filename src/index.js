import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './assets/css/estruturadapagina.css';
import './assets/css/tabela.css';
import {criarServidor} from './services/mirage-server';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import store from './redux/store';

const ambiente = process.env.NODE_ENV;
if (ambiente !== "production") {
  criarServidor({ environment: ambiente });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {routes.map(route => (
          <Route path={route.path} component={route.component} exact={route.exact} />
          ))}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
