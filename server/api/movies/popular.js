export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event);
  const {AccessToken} = config;
  const moviePopularUrl = 'https://api.themoviedb.org/3/movie/popular';
  const seriesPopularUrl = 'https://api.themoviedb.org/3/tv/popular';

  const popularMovies = await $fetch(moviePopularUrl, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`
    }
  });

  const popularSeries = await $fetch(seriesPopularUrl, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`
    }
  });

  return { popularMovies, popularSeries };
});