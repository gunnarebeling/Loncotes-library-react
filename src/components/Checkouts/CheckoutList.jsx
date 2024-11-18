import { useEffect, useState } from "react"
import { getAllCheckouts, returnCheckout } from "../../data/checkoutsData"
import { Table } from "reactstrap"

export const CheckoutList = () => {
    const [checkouts, setCheckouts] = useState([])
    const [wasReturned, setWasReturned] = useState(false)

    useEffect(() => {
        getAllCheckouts().then(res => setCheckouts(res))
    }, [wasReturned])

    const handleReturn = (e) => {
        const id = e.target.dataset.id
        returnCheckout(id).then(()=> setWasReturned(r => !r))
    }

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
              <td>{co.returnDate?.split("T")[0] || "not returned"}</td>
              <td>{!co.returnDate && <button data-id={co.id} onClick={handleReturn}>return</button> }</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

    )
}