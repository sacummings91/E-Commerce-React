import createUser from '../../api/createUser';

export default {
  create(attributes) {
    return async (dispatch, getState) => {
      try {
        const user = await createUser(attributes);
        return user;
      } catch (error) {
        console.log(error);
      }
    };
  }
};
