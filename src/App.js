import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { isEmpty } from './utils/LangUtils';
import setupStore from './redux/setupStore';
import CatalogPageContainer from './redux/containers/CatalogPageContainer';
import ProductPageContainer from './redux/containers/ProductPageContainer';
import CartPageContainer from './redux/containers/CartPageContainer';
import AdminPageContainer from './redux/containers/AdminPageContainer';
import CreateAccountPageContainer from './redux/containers/CreateAccountPageContainer';
import LoginPageContainer from './redux/containers/LoginPageContainer';
import ProfilePageContainer from './redux/containers/ProfilePageContainer';

function getInitialState(authentication) {
  return isEmpty(authentication)
    ? {
        clothingItems: [],
        clothingItem: {},
        cartItems: []
      }
    : {
        clothingItems: [],
        clothingItem: {},
        cartItems: [],
        userFavorites: [],
        token: authentication.token,
        authenticatedUserId: authentication.user.id,
        usersById: {
          [authentication.user.id]: authentication.user
        }
      };
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider
          store={setupStore(getInitialState(this.props.authentication))}>
          <Router>
            <Switch>
              <Route exact path="/" component={CatalogPageContainer} />
              <Route
                exact
                path="/signup"
                component={CreateAccountPageContainer}
              />
              <Route exact path="/login" component={LoginPageContainer} />
              <Route
                exact
                path="/products/:productId"
                component={ProductPageContainer}
              />
              <Route exact path="/cart" component={CartPageContainer} />
              <Route exact path="/admin" component={AdminPageContainer} />
              <Route exact path="/profile" component={ProfilePageContainer} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
