import * as actions from '../actions/actionsTypes';

const initialState = {
  places: [],
  selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.ADD_PLACE:
     return {
       ...state,
       places: state.places.concat({
        key: Math.random(),
        name: action.placeName,
        image: {
          uri: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F65%2FStrasbourg_place_Gutenberg_novembre_2013_04.jpg&f=1'
          }
        }),
     };
     case actions.DELETE_PLACE: 
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    case actions.SELECT_PLACE: 
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        }),
      };
    case actions.UNSELECT_PLACE: 
      return {
        ...state,
        selectedPlace: null,
      };
    default:
      return state;
  }
};

export default reducer;