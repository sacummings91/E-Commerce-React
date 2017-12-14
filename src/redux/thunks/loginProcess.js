import decode from 'jwt-decode';

import authenticate from '../../api/token';
import getUser from '../../api/getUser';
import { defer } from '../../utils/FunctionUtils';

export default {
  create(credentials, history) {
    return async (dispatch, getState) => {
      try {
        const tokenObj = await authenticate(credentials);
        const token = tokenObj.access_token

        localStorage.setItem('token', token);

        const { identity: userId } = decode(token);

        const user = await getUser(userId, token);

        defer(() => {
          history.push('/');
        });

        dispatch({ type: 'LOGIN', token, user });
        return { token, user };
      } catch (error) {
        localStorage.removeItem('token');
        throw error;
      }
    };
  }
};
