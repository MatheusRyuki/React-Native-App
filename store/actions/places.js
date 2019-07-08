import * as action from './actionsTypes';

export const addPlace = (placeName) => {
  return {
    type: action.ADD_PLACE,
    placeName: placeName,
  };
};

export const deletePlace = () => {
  return {
    type: action.DELETE_PLACE,
  };
};

export const selectPlace = (key) => {
  return {
    type: action.SELECT_PLACE,
    placeKey: key
  };
};

export const unselectPlace = () => {
  return {
    type: action.UNSELECT_PLACE,
  };
};