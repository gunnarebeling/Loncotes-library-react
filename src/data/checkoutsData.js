const _apiUrl = 'http://localhost:5173/api/checkouts'

export const getAllCheckouts = () => {
    return fetch(_apiUrl).then(res => res.json())
}

export const returnCheckout = (id) => {
    return fetch(`${_apiUrl}/${id}/return`, {
        method: 'PUT'
    })
}

export const postCheckout = (checkoutObj) => {
    return fetch(_apiUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(checkoutObj)
    })
}

export const getOverdueCheckouts = () => {
    return fetch(`${_apiUrl}/overdue`).then(res => res.json())
}