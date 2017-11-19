import { lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ProfilePage from '../../components/profilepage/ProfilePage';
import LogoutProcess from '../thunks/logoutProcess';
import getFavoritesProcess from '../thunks/getFavoritesProcess';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    authenticatedUser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getFavoritesProcess()),
    logout: () => dispatch(LogoutProcess.create(ownProps.history))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const addLifecycle = lifecycle({
  componentDidMount() {}
});

export default connectToStore(addLifecycle(ProfilePage));
