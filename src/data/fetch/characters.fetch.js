const API = "https://swapi.dev/api";
const TYPE = "people";

export const fetchCharactersFromAPI = () => {
  const promise = fetch(`${API}/${TYPE}`);

  return promise;
};
export const fetchNewCharactersFromAPI = (url) => {
  const promise = fetch(url);

  return promise;
};
