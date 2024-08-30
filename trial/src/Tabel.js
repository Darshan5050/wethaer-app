import React from "react"
function Table(props){
    const{product}=props
    return(
        <>
        <div>
            <table border='1'>
    <tr>
        <th>id </th>
        <th>name</th>
        <th>cost</th>
    </tr>

    {product.map((val)=>(
        <tr>
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td>{val.cost}</td>
        </tr>

    ))}
    </table>
    </div>
    </>
    )
}
export default Table