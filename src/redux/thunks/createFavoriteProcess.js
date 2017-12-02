import createFavorite from '../../api/createFavorite';

export default function createFavoriteProcess(userId, itemId) {
  console.log('CREATE FAVORITE');
  return (dispatch, getState) => {
    return createFavorite(userId, itemId).then(createdFavorite => {
      console.log(createdFavorite, 'WHAT IS THIS');
      dispatch({
        type: 'ADD_FAVORITE',
        favorite: createdFavorite[0],
        favoriteItem: createdFavorite[1]
      });
      return createdFavorite;
    });
  };
}
