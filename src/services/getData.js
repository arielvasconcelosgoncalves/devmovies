import api from './api';
//Movies
export const getMovies = async () => {
  const {
    data: { results },
  } = await api.get('/movie/popular');
  console.log(results[0]);
  return results[0];
};

export const getTopMovies = async () => {
  const {
    data: { results },
  } = await api.get('/movie/top_rated');
  return results;
};

export const getPopularMovies = async () => {
  const {
    data: { results },
  } = await api.get('/movie/popular');
  return results;
};

export const getTrailer = async (movieId) => {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);
  console.log(results[0]);
  return results[0];
};

export const getMovieCredits = async (movieId) => {
  const {
    data: { cast },
  } = await api.get(`/movie/${movieId}/credits`);
  return cast;
};

export const getMovieSimilar = async (movieId) => {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/similar`);
  return results;
};

export const getMovieById = async (movieId) => {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
};

export const getMovieVideo = async (movieId) => {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);
  return results;
};

//Series

export const getSeries = async () => {
  const {
    data: { results },
  } = await api.get('/tv/popular');
  console.log(results[0]);
  return results[0];
};

export const getTopSeries = async () => {
  const {
    data: { results },
  } = await api.get('/tv/top_rated');
  return results;
};
export const getPopularSeries = async () => {
  const {
    data: { results },
  } = await api.get('/tv/popular');
  return results;
};

export const getSeriesTrailer = async (movieId) => {
  const {
    data: { results },
  } = await api.get(`/tv/${movieId}/videos`);
  console.log(results[0]);
  return results[0];
};

export const getSeriesCredits = async (serieId) => {
  const {
    data: { cast },
  } = await api.get(`/tv/${serieId}/credits`);
  console.log(cast);
  return cast;
};

export const getSeriesSimilar = async (serieId) => {
  const {
    data: { results },
  } = await api.get(`/tv/${serieId}/similar`);
  console.log(results);
  return results;
};

export const getSeriesById = async (serieId) => {
  const { data } = await api.get(`/tv/${serieId}`);
  console.log(data);
  return data;
};

export const getSeriesVideo = async (movieId) => {
  const {
    data: { results },
  } = await api.get(`/tv/${movieId}/videos`);
  console.log(results);
  return results;
};

//People

export const getTopPeople = async () => {
  const {
    data: { results },
  } = await api.get('/person/popular');
  console.log(results);
  return results;
};
