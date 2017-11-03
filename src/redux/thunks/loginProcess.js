import decode from 'jwt-decode';

import authenticate from '../../api/token';
import getUser from '../../api/getUser';
import { defer } from '../../utils/FunctionUtils';

export default {
  create(credentials, history) {
    return async (dispatch, getState) => {
      try {
        const { token } = await authenticate(credentials);

        localStorage.setItem('token', token);

        const { sub: userId } = decode(token);
        const user = await getUser(userId, { token });

        defer(() => {
          history.push('/');
        });

        dispatch({ type: 'LOGIN', token, user });
        return { token, user };
      } catch (error) {
        console.error(error);

        localStorage.removeItem('token');
      }
    };
  }
};
