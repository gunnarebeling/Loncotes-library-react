import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPatronById, updatePatron } from "../../data/patronsData"
import { Table } from "reactstrap"

export const EditPatron = () => {
    const [patron , setPatron] = useState({})
    const [patronUpdate, setPatronUpdate] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getPatronById(id).then(res => setPatron(res))
    }, [])

    useEffect(() => {
        setPatronUpdate({email: patron.email, address: patron.address})
    }, [patron])

    const handleSubmit = () => {
        const copy = {...patronUpdate}
        copy.id = id
        updatePatron(copy).then(() =>
            navigate(`/patrons/${id}`)
        )
    }
    
    return (
        <div className="container">
            <h2>Edit {patron.firstName} {patron.lastName}</h2>
            <Table>
            <tbody>
                <tr>
                    <th scope="row">Address</th>
                    <td>
                        <input 
                            type="text"
                            value={patronUpdate.address || ""}
                            onChange={event => {
                                let copy = {...patronUpdate}
                                copy.address = event.target.value
                                setPatronUpdate(copy)
                            }} />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Email</th>
                    <td>
                        <input 
                            type="text"
                            value={patronUpdate.email || ""}
                            onChange={event => {
                                let copy = {...patronUpdate}
                                copy.email = event.target.value
                                setPatronUpdate(copy)
                            }} />
                    </td>
                </tr>
            </tbody>
            </Table>
            <div className="text-center">
                <button className="btn btn-primary" onClick={handleSubmit}>submit</button>
            </div>
        </div>
    )
}