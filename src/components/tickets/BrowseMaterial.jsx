import { useEffect, useState } from "react"
import { getavailableMaterials } from "../../data/materialsData"
import { Table } from "reactstrap"
import { useNavigate } from "react-router-dom"

export const BrowseMaterial = () => {
    const [materials, setMaterials] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getavailableMaterials().then(res => setMaterials(res))
    }, [])

    const handleCheckout = (e) => {
        e.preventDefault()
        const materialId = e.target.dataset.id
        navigate(`/materials/${materialId}/checkout`)
    }

    return (
        <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials</h4>
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
                <button data-id={m.id} onClick={handleCheckout}>checkout</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    )
}