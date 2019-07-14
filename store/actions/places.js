import * as action from './actionsTypes';

export const addPlace = (placeName) => {
  return {
    type: action.ADD_PLACE,
    placeName: placeName,
  };
};

export const deletePlace = (key) => {
  return {
    type: action.DELETE_PLACE,
    key: key,
  };
};
