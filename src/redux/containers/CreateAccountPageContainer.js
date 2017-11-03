import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import CreateAccountPage from '../../components/createaccountpage/CreateAccountPage';
import CreateUserProcess from '../thunks/createUserProcess';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    authenticatedUser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    async onSubmit(attributes) {
      await dispatch(CreateUserProcess.create(attributes));
      ownProps.history.push('/');
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    if (this.props.authenticatedUser) this.props.history.push('/');
  }
});

export default compose(connectToStore, withLifecycle)(CreateAccountPage);
