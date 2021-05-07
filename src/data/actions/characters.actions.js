import {
  CHARACTERS_GET_FAILURE,
  CHARACTERS_GET_REQUEST,
  CHARACTERS_GET_SUCCESS,
  CHARACTERS_GET_NEW_SUCCESS,
  CHARACTERS_GET_NEW_FAILURE,
  CHARACTERS_GET_NEW_REQUEST,
} from "../reducers/constans";
import {
  fetchCharactersFromAPI,
  fetchNewCharactersFromAPI,
} from "../fetch/characters.fetch";

export const fetchCharacters = () => async (dispatch) => {
  dispatch({ type: CHARACTERS_GET_REQUEST });
  try {
    const response = await fetchCharactersFromAPI();
    const data = await response.json();
    dispatch({ type: CHARACTERS_GET_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: CHARACTERS_GET_FAILURE });
  }
};

export const fetchNewCharacters = (url) => async (dispatch) => {
  dispatch({ type: CHARACTERS_GET_NEW_REQUEST });
  try {
    const response = await fetchNewCharactersFromAPI(url);
    const data = await response.json();
    dispatch({ type: CHARACTERS_GET_NEW_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: CHARACTERS_GET_NEW_FAILURE });
  }
};
