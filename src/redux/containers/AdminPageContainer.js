import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import AdminPage from '../../components/adminpage/AdminPage';

import getProductsProcess from '../thunks/getProductsProcess';
import createProductProcess from '../thunks/createProductProcess';
import updateProductProcess from '../thunks/updateProductProcess';
import deleteProductProcess from '../thunks/deleteProductProcess';

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    clothingItems: state.clothingItems
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getProductsProcess()),
    onSubmit: ({ id, ...changes }) =>
      id
        ? dispatch(updateProductProcess(id, changes))
        : dispatch(createProductProcess(changes)),
    onDelete: ({ id }) => dispatch(deleteProductProcess(id))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(AdminPage);
