import React from "react"
import { useNavigate } from "react-router-dom"


const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
]

const Emp =()=>{
    const navigate = useNavigate()

    const detail = () =>{
        navigate('/EmpDe')
    }

    const handleDe = (item) =>{
        navigate('/EmpDe',{state:item})
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>                               
                    {employees.map(people =>(
                        <tr key={people.id}>
                            <td>{people.id}</td>
                            <td>{people.name}</td>
                            <td>{people.age}</td>
                            <td><button onClick={detail}>Detail</button></td>
                        </tr>
                    ))}                              
                </tbody>
            </table>
        </div>
    )
}
export default Emp;