const p_Url = "http://localhost:5173/api/patrons"

export const getAllPatrons = () => {
    return fetch(`${p_Url}`).then(res => res.json())
}

export const getPatronById = (id) => {
    return fetch(`${p_Url}/${id}`).then(res => res.json())
}

export const updatePatron = (patronObj) => {
    return fetch(`${p_Url}/${patronObj.id}/edit`, {
        method: 'PUT',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(patronObj)
    })
}
export const deactivatePatron = (id) => {
    return fetch(`${p_Url}/${id}/deactivate`, {
        method: 'PUT'
    })

}