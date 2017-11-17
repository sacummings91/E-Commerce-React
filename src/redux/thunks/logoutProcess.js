export default {
  create(history) {
    return async (dispatch, getState) => {
      try {
        localStorage.removeItem('token');

        history.push('/');

        dispatch({ type: 'LOGOUT' });
      } catch (error) {
        console.log(error);
      }
    };
  }
};
