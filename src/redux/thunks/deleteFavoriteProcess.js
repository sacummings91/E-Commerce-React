import deleteFavorite from '../../api/deleteFavorite';

export default function deleteFavoriteProcess(id) {
  console.log('DELETE FAVORITE');
  return (dispatch, getState) => {
    return deleteFavorite(id).then(() => {
      dispatch({ type: 'DELETE_FAVORITE', favId: id });
    });
  };
}
