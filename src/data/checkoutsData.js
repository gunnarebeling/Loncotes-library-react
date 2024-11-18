const _apiUrl = 'http://localhost:5173/api/checkouts'

export const getAllCheckouts = () => {
    return fetch(_apiUrl).then(res => res.json())
}