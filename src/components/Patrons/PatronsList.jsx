import { useEffect, useState } from "react";
import { getAllPatrons } from "../../data/patronsData";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

export const PatronsList = () => {
    const [patrons, setPatrons] = useState([])

    useEffect(() => {
        getAllPatrons().then(res => setPatrons(res))
    },[])

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patrons.map((p) => (
            <tr key={`patron-${p.id}`}>
              <th scope="row">{p.id}</th>
              <td>{p.firstName} {p.lastName}</td>
              <td>{p.address}</td>
              <td>{p.email}</td>
              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

    
}