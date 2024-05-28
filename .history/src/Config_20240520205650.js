export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const api_key = `1131ba05247a46f0af67e1e0ed316977`;
const tmdbEndpoint = `https://api.themoviedb.org/3/movie`
export const tmdbAPI = {
  getMovieList: (type) =>
    `https://api.themoviedb.org/3/movie/${type}?api_key=1131ba05247a46f0af67e1e0ed316977`,
};
