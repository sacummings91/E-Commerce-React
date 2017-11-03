export default {
  create(credentials) {
    return async (dispatch, getState) => {
      try {
        localStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' });
      } catch (error) {
        console.log(error);
      }
    };
  }
};
