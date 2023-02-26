import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0e13fbdd8c25dd146508a582d48a9360';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';
const lang = 'en-US';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: lang,
};

export const fetchPopularMovies = async period => {
  try {
    const response = await axios.get(`trending/movie/${period}`);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoviesByName = async query => {
  const response = await axios.get(`search/movie?query=${query}`);
  return response.data.results;
};
