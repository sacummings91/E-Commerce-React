import { lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ProfilePage from '../../components/profilepage/ProfilePage';
import LogoutProcess from '../thunks/logoutProcess';
import getOrdersProcess from '../thunks/getOrdersProcess';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    clothingItems: state.clothingItems,
    userOrders: state.userOrders,
    authenticatedUser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: id => dispatch(getOrdersProcess(id)),
    logout: () => dispatch(LogoutProcess.create(ownProps.history))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount(this.props.authenticatedUser.id);
  }
});

export default connectToStore(onDidMount(ProfilePage));
