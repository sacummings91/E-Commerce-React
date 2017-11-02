import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import setupStore from './redux/setupStore';
import CatalogPageContainer from './redux/containers/CatalogPageContainer';
import ProductPageContainer from './redux/containers/ProductPageContainer';
import CartPageContainer from './redux/containers/CartPageContainer';
import AdminPageContainer from './redux/containers/AdminPageContainer';
import CreateAccountPageContainer from './redux/containers/CreateAccountPageContainer';
import LoginPageContainer from './redux/containers/LoginPageContainer';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={CatalogPageContainer} />
              <Route
                exact
                path="/signup"
                component={CreateAccountPageContainer}
              />
              <Route exact path="/login" comnponent={LoginPageContainer} />
              <Route
                exact
                path="/products/:productId"
                component={ProductPageContainer}
              />
              <Route exact path="/cart" component={CartPageContainer} />
              <Route exact path="/admin" component={AdminPageContainer} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
