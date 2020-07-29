const api_key = "T7PYAPTNakvlfKMheYfXTdi2cYbZvV1di6zGdv43";
const baseURL = "https://api.nasa.gov/planetary/apod";

export const getPicture = (date) => {
  let url = `${baseURL}?date=${date}&api_key=${api_key}`;
  return fetch(url).then((response) => response.json());
};
