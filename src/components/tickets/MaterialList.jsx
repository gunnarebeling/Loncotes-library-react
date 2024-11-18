import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getMaterials, removeMaterial } from "../../data/materialsData";
import { Link } from "react-router-dom";

export default function MaterialList() {
  const [materials, setMaterials] = useState([]);
  const [remove, setRemove] = useState(false)

  useEffect(() => {
    getMaterials().then(setMaterials);
  }, [remove]);

  const handleRemove = (e) => {
    const materialId = e.target.dataset.id
    removeMaterial(materialId).then(() => setRemove(r => !r))

  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials</h4>
        <Link to="/materials/create">Add</Link>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}`}>Details</Link>
              </td>
              <td>
                <button data-id={m.id} onClick={handleRemove}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
