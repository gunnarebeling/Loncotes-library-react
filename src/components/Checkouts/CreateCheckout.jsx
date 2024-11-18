import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllPatrons } from "../../data/patronsData"
import { getMaterial } from "../../data/materialsData"
import { postCheckout } from "../../data/checkoutsData"

export const CreateCheckout = () => {
    const [checkoutObj, setCheckoutObj] = useState({materialId: 0, patronId:0})
    const [material, setMaterial] = useState({})
    const [patrons, setPatrons] = useState([])
    const {materialId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getAllPatrons().then(res => {
            const filteredPatrons = res.filter(r => r.isActive)
            setPatrons(filteredPatrons) 
        })
        getMaterial(materialId).then(res => setMaterial(res[0]))
    },[])

    useEffect(() => {
        const copy = {...checkoutObj}
        copy.materialId = parseInt(materialId)
        setCheckoutObj(copy)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (checkoutObj.patronId === 0) {
            window.alert("must choose a patron")
        }else{
            postCheckout(checkoutObj).then(
                navigate('/browse')
            )

        }


    }

    return (
        <div className="container">
            <h4>Checkout - {material.materialName} </h4>
            <div className="m-3 text-center">
                <h4>Select Patron</h4>
                <select 
                    name="patron" 
                    id="select-patron"
                    value={checkoutObj.patronId}
                    onChange={(e) => {
                        const copy = {...checkoutObj}
                        copy.patronId = parseInt(e.target.value)
                        setCheckoutObj(copy)
                    }}>
                        <option value="#">choose patron</option>
                        {patrons.map(p => {
                            return <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>
                        })}

                </select>
                <div className="m-3">
                    <button onClick={handleSubmit}>submit</button>
                </div>
            </div>
        </div>
    )
}