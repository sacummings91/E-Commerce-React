import createFavorite from '../../api/createFavorite';

export default function createFavoriteProcess(userId, itemId) {
  return (dispatch, getState) => {
    return createFavorite(userId, itemId).then(createdFavorite => {
      dispatch({
        type: 'ADD_FAVORITE',
        favorite: createdFavorite[1],
        favoriteItem: createdFavorite[0]
      });
      return createdFavorite;
    });
  };
}
