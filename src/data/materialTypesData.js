const _apiUrl = "http://localhost:5173/api/materialtypes";

export const getMaterialTypes = () => {
  return fetch(_apiUrl).then((res) => res.json());
};
