import deleteFavorite from '../../api/deleteFavorite';

export default function deleteFavoriteProcess(favorite) {
  return (dispatch, getState) => {
    return deleteFavorite(favorite).then(() => {
      dispatch({ type: 'DELETE_FAVORITE', favorite: favorite });
    });
  };
}
