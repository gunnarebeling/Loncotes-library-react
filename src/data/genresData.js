const _apiUrl = "http://localhost:5173/api/genres";

export const getGenres = () => {
  return fetch(_apiUrl).then((res) => res.json());
};
