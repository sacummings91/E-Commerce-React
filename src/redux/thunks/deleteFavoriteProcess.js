import deleteFavorite from '../../api/deleteFavorite';

export default function deleteFavoriteProcess(favorite) {
  console.log('DELETE FAVORITE');
  return (dispatch, getState) => {
    return deleteFavorite(favorite).then(() => {
      dispatch({ type: 'DELETE_FAVORITE', favorite: favorite });
    });
  };
}
