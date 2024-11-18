import { useEffect, useState } from "react"
import { getGenres } from "../../data/genresData"
import { getMaterialTypes } from "../../data/materialTypesData"

export const FilterBar = ({filteredMaterials, setRemove, setFilter, materials}) => {
    const [genres, setGenres] = useState([])
    const [types, setTypes] = useState([])
    const [filterChoice, setFilterChoice] = useState({genre: 0, type: 0})


    useEffect(() => {
        getGenres().then(res => setGenres(res))
        getMaterialTypes().then(res => setTypes(res))
    }, [])

    useEffect(() => {
        let choice = [...materials]
        if (filterChoice.genre !== 0) {
            choice = choice.filter(m => m.genreId == filterChoice.genre)
        }
        if (filterChoice.type !== 0) {
            choice = choice.filter(m=> m.materialTypeId == filterChoice.type)
        }
        setFilter(choice)
    }, [filterChoice])


    return (
        <div>
            <label className="m-2" htmlFor="">genre:</label>
            <select 
                name="genre" 
                id="genre-dropdown"
                onChange={(e) => {
                    let copy = {...filterChoice}
                    const value = parseInt(e.target.value)
                    copy.genre = value
                    setFilterChoice(copy)

                   

                }}>
                    <option value="#">search genre</option>
                    <option value="0">all</option>
                    {genres.map(g => {
                        return <option key={g.id} value={g.id}>{g.name}</option>
                    })}
            </select>
            <label className="m-2" htmlFor="">type:</label>
            <select 
                name="type" 
                id="type-dropdown"
                onChange={(e) => {
                    let copy = {...filterChoice}
                    const value = parseInt(e.target.value)
                    copy.type = value
                    setFilterChoice(copy)


                }}>
                    <option value="#">search type</option>
                    <option value="0">all</option>
                    {types.map(g => {
                        return <option key={g.id} value={g.id}>{g.name}</option>
                    })}
            </select>
        </div>
    )
}