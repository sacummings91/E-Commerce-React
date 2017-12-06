import { lifecycle } from 'recompose';
import { connect } from 'react-redux';

import LoginPage from '../../components/loginpage/LoginPage';
import LoginProcess from '../thunks/loginProcess';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems,
    authenticateduser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    login: credentials =>
      dispatch(LoginProcess.create(credentials, ownProps.history))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const addLifecycle = lifecycle({
  componentDidMount() {}
});

export default connectToStore(addLifecycle(LoginPage));
