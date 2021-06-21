import {
  GET_CHARACTERS,
  GET_Filter_CHARACTERS,
  FETCH_CHARACTERS,
  GET_FILM,
  GET_SPECIES,
  GET_STARSHIPS,
  CLEAR_DATA,
} from './actions';

const initialState = {
  characters: [],
  spacies: {},
  spaciesArr: {},
  film: {},
  filmArr: [],
  starShip: {},
  starShipArr: [],
  fetching: false,
};
function characterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {...state, fetching: true};
    case GET_CHARACTERS:
      return {...state, characters: action.payload, fetching: action.fetching};
    case GET_Filter_CHARACTERS:
      return {...state, characters: action.payload, fetching: action.fetching};
    case GET_FILM:
      state.filmArr.push(action.payload);
      return {
        ...state,
        film: action.payload,
        filmArr: state.filmArr,
        fetching: action.fetching,
      };
    case GET_SPECIES:
      state.spaciesArr.push(action.payload);
      return {
        ...state,
        spacies: action.payload,
        spaciesArr: state.spaciesArr,
        fetching: action.fetching,
      };
    case GET_STARSHIPS:
      state.starShipArr.push(action.payload);
      return {
        ...state,
        starShip: action.payload,
        starShipArr: state.starShipArr,
        fetching: action.fetching,
      };
    case CLEAR_DATA:
      return {
        ...state,
        spacies: {},
        spaciesArr: [],
        film: {},
        filmArr: [],
        starShip: {},
        starShipArr: [],
        fetching: false,
      };
    default:
      return state;
  }
}
export default characterReducer;
