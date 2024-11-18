import { useEffect, useState } from "react"
import { getOverdueCheckouts } from "../../data/checkoutsData"
import { Table } from "reactstrap"

export const OverdueCheckouts = () => {
    const [checkouts, setCheckouts] = useState([])

    useEffect(() => {
        getOverdueCheckouts().then(res => setCheckouts(res))
    }, [])
    
    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Overdue Checkouts</h4>
            </div>
            <Table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Material</th>
                    <th>Patron</th>
                    <th>checkout date</th>
                </tr>
                </thead>
                <tbody>
                {checkouts.map((co) => (
                    <tr key={`checkout-${co.id}`}>
                    <th scope="row">{co.id}</th>
                    <td>{co.material.materialName}</td>
                    <td>{co.patron.firstName} {co.patron.lastName}</td>
                    <td>{co.checkoutDate.split("T")[0]}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}