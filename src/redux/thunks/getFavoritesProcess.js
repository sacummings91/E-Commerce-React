import getFavorites from '../../api/getFavorites';

export default function getFavoritesProcess() {
  return (dispatch, getstate) => {
    return getFavorites().then(favorites => {
      dispatch({ type: 'GET_FAVORITES', favorites });
      return favorites;
    });
  };
}
