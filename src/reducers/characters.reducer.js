import {
  CHARACTERS_GET,
  CHARACTERS_GET_REQUEST,
  CHARACTERS_GET_SUCCESS,
  CHARACTERS_GET_FAILURE,
} from "./constans";

const initialState = {
  lodaingState: null,
  characters: [],
};

const characters = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHARACTERS_GET_REQUEST:
      break;
    case CHARACTERS_GET_SUCCESS:
      break;
    case CHARACTERS_GET_FAILURE:
      break;
    default:
      break;
  }
};

export default characters;
