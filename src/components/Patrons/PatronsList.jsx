import { useEffect, useState } from "react";
import { deactivatePatron, getAllPatrons } from "../../data/patronsData";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";

export const PatronsList = () => {
    const [patrons, setPatrons] = useState([])
    const [deactivate, setDeactivate] = useState(false)

    useEffect(() => {
        getAllPatrons().then(res => setPatrons(res))
    },[deactivate])

    const handleDeactivate = (event) => {
      const patronId = event.target.dataset.id
      deactivatePatron(patronId).then(setDeactivate(d => !d))
      
      
      
    }


    return (
        <div className="container">
      <div className="sub-menu bg-light">
        <h4>Patrons</h4>
        <Link to="/patrons">Add</Link>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>is Active</th>
          </tr>
        </thead>
        <tbody className="text-center align-items-center">
          {patrons.map((p) => (
            <tr key={`patron-${p.id}`}>
              <th scope="row">{p.id}</th>
              <td>{p.firstName} {p.lastName}</td>
              <td>{p.address}</td>
              <td>{p.email}</td>
              <td>{p.isActive ? "Active" : "Not Active"}</td>
              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td>
              <td>{p.isActive && (<button data-id={p.id} onClick={handleDeactivate} className="btn btn-warning">deactivate</button>)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

    
}