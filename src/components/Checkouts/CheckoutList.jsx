import { useEffect, useState } from "react"
import { getAllCheckouts } from "../../data/checkoutsData"
import { Table } from "reactstrap"

export const CheckoutList = () => {
    const [checkouts, setCheckouts] = useState([])

    useEffect(() => {
        getAllCheckouts().then(res => setCheckouts(res))
    }, [])

    return (
        <div className="container">
      <div className="sub-menu bg-light">
        <h4>Checkouts</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Material</th>
            <th>Patron</th>
            <th>checkout date</th>
            <th>return date</th>
          </tr>
        </thead>
        <tbody>
          {checkouts.map((co) => (
            <tr key={`checkout-${co.id}`}>
              <th scope="row">{co.id}</th>
              <td>{co.material.materialName}</td>
              <td>{co.patron.firstName} {co.patron.lastName}</td>
              <td>{co.checkoutDate.split("T")[0]}</td>
              <td>{co.returnDate || "not returned"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

    )
}