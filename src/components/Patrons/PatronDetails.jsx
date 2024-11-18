import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPatronById } from "../../data/patronsData"
import { Table } from "reactstrap"

export const PatronDetails = () => {
    const [patron , setPatron] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getPatronById(id).then(res => setPatron(res))
    }, [])

    return (
        <div className="container">
            <div className="d-flex align-items-center">
                <h2>{patron.firstName} {patron.lastName}</h2>
                <Link to="edit" className="m-2">edit</Link>
            </div>
            <Table>
                <tbody>
                <tr>
                    <th scope="row">Address</th>
                    <td>{patron.address}</td>
                </tr>
                <tr>
                    <th scope="row">Email</th>
                    <td>{patron.email}</td>
                </tr>
                <tr>
                    <th scope="row">Is Active</th>
                    <td>
                    { patron.isActive ? "Active" : "Not Active"}
                    </td>
                </tr>
                <tr>
                    <th scope="row">Total Fees Due</th>
                    <td>
                    ${patron.balance || 0 }
                    </td>
                </tr>
                </tbody>
            </Table>
            <h5>Checkouts</h5>
            {patron.checkouts?.length ? (
                <Table>
                <thead>
                    <tr>
                    <th>Material</th>
                    <th>Checkout Date</th>
                    <th>Return Date</th>
                    <th>Late Fee</th>
                    </tr>
                </thead>
                <tbody>
                    {patron.checkouts.map((co) => (
                    <tr key={`checkout-${co.id}`}>
                        <td>
                        {co.material.materialName}
                        </td>
                        <td>{co.checkoutDate?.split("T")[0]}</td>
                        <td>{co.returnDate?.split("T")[0] || "Checked Out"}</td>
                        <td>{co.lateFee || "N/A"}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            ) : (
                <p>No checkouts for this material</p>
            )}
        </div>
  
    )
}