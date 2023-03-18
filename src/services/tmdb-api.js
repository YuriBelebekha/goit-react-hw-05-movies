import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '008c8606747b1b5922ba109cd86c2637';

export const {
  media_type,
  time_window,
  language,
  page,
  include_adult,
  baseApiUrlForPoster,
  posterWidth,
  posterHeight,
  posterMissing,
} = {
  'media_type': 'movie',
  'time_window': 'day',
  'language': 'en-US',
  'page': 1,
  'include_adult': false,
  'baseApiUrlForPoster': 'https://image.tmdb.org/t/p/w300/',
  'posterWidth': 170,
  'posterHeight': 250,
  'posterMissing': 'https://i.pinimg.com/564x/19/68/4e/19684eccf94d5748e2ba69fba7f6dd11.jpg',
};

// The Movie Database API docs for "get-trending":
// https://developers.themoviedb.org/3/trending/get-trending

export async function fetchGetTrending() {
  const { data } = await axios.get(`
    ${BASE_URL}/trending/${media_type}/${time_window}?api_key=${API_KEY}
  `);
  return await data;
};

// The Movie Database API docs for "search-movies":
// https://developers.themoviedb.org/3/search/search-movies

export async function fetchSearchMovies(query) {
  const { data } = await axios.get(`
    ${BASE_URL}/search/${media_type}?api_key=${API_KEY}&language=${language}&page=${page}&include_adult=${include_adult}&query=${query}
  `);
  return await data;
};

// The Movie Database API docs for "get-movie-details":
// https://developers.themoviedb.org/3/movies/get-movie-details

export async function fetchGetMovieDetails(id) {
  const { data } = await axios.get(`
    ${BASE_URL}/${media_type}/${id}?api_key=${API_KEY}&language=${language}
  `);
  return await data;
};

// The Movie Database API docs for "get-movie-credits":
// https://developers.themoviedb.org/3/movies/get-movie-credits

export async function fetchGetMovieCredits(id) {
  const { data } = await axios.get(`
    ${BASE_URL}/${media_type}/${id}/credits?api_key=${API_KEY}&language=${language}
  `);
  return await data;
};

// The Movie Database API docs "get-movie-reviews":
// https://developers.themoviedb.org/3/movies/get-movie-reviews

export async function fetchGetMovieReviews(id) {
  const { data } = await axios.get(`
    ${BASE_URL}/${media_type}/${id}/reviews?api_key=${API_KEY}&language=${language}
  `);
  return await data;
};