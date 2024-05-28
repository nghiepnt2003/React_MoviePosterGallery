export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const api_key = `1131ba05247a46f0af67e1e0ed316977`;
const tmdbEndpoint = `https://api.themoviedb.org/3/movie`;

// Tạo ra một object.
// trong đó chứa các function trả về chuỗi string
// Chuổi string đó là các URL để fetch Data từ API
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${api_key}&page=${page}`,
  getMovieDetail: (movieID) => `${tmdbEndpoint}/${movieID}?api_key=${api_key}`,

  getMovieSearch: (filterDebounce,page=1) => `https://api.themoviedb.org/3/search/movie?query=${filterDebounce}&api_key=${api_key}&page=${nextPage},
  getMovieInfo: (movieID, type) =>
    `${tmdbEndpoint}/${movieID}/${type}?api_key=${api_key}`,
  imageOriginal: (url) => `http://image.tmdb.org/t/p/original//${url}`,
};
