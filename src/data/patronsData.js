const p_Url = "http://localhost:5173/api/patrons"

export const getAllPatrons = () => {
    return fetch(`${p_Url}`).then(res => res.json())
}