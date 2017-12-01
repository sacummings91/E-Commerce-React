import createFavorite from '../../api/createFavorite';

export default function createFavoriteProcess(id, itemId) {
  console.log('CREATE FAVORITE');
  return (dispatch, getState) => {
    return createFavorite(id, itemId).then(createdFavorite => {
      dispatch({
        type: 'ADD_FAVORITE',
        favorite: createdFavorite
      });
      return createdFavorite;
    });
  };
}
