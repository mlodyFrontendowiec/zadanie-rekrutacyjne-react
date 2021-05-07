import {
  CHARACTERS_GET,
  CHARACTERS_GET_REQUEST,
  CHARACTERS_GET_SUCCESS,
  CHARACTERS_GET_FAILURE,
  CHARACTERS_GET_NEW_REQUEST,
  CHARACTERS_GET_NEW_SUCCESS,
  CHARACTERS_GET_NEW_FAILURE,
} from "./constans";

const initialState = {
  lodaingState: null,
  lodaingStateNew: null,
  characters: [],
  next: null,
};

const characters = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHARACTERS_GET_REQUEST:
      return {
        ...state,
        lodaingState: "LOADING",
      };

    case CHARACTERS_GET_SUCCESS:
      return {
        ...state,
        next: payload.next,
        characters: [...payload.results],
        lodaingState: "LOADED",
      };

    case CHARACTERS_GET_FAILURE:
      return {
        ...state,
        next: null,
        characters: [],
        lodaingState: "FAIL",
      };

    case CHARACTERS_GET_NEW_REQUEST:
      return {
        ...state,
        lodaingStateNew: "LOADING",
      };
    case CHARACTERS_GET_NEW_SUCCESS:
      return {
        ...state,
        next: payload.next,
        characters: [...state.characters, ...payload.results],
        lodaingStateNew: "LOADED",
      };

    case CHARACTERS_GET_NEW_FAILURE:
      return {
        ...state,
        next: null,
        characters: [...state.characters],
        lodaingStateNew: "FAIL",
      };
    default:
      return state;
      break;
  }
};

export default characters;
