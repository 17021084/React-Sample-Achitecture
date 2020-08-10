import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {PersistGate} from 'redux-persist/lib/integration/react';
import AdminLayout from './layouts/index';
import store, {persistor} from './stores/configureStore';
import './assets/css/site.css';
import {I18nextProvider} from 'react-i18next';
import i18n from './translations/i18n';

const token = localStorage.getItem('TOKEN_KEY');

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Switch>
              <Route path="/xxx" render={(props) => <AdminLayout {...props} />} />
              <Redirect from="/" to={token ? '/xxx/home' : '/xxx/login'} />
            </Switch>
          </I18nextProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
