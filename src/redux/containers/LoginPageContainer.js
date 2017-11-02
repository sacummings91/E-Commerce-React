import { lifecycle } from 'recompose';
import { connect } from 'react-redux';

import LoginPage from '../../components/loginpage/LoginPage';
import LoginProcess from '../thunks/loginProcess';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    authenticateduser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const addLifecycle = lifecycle({
  componentDidMount() {
    this.props.initialize(this.props);
  }
});

export default connectToStore(addLifecycle(LoginPage));
