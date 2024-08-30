import React from "react";
import Project from './Project'
function Project1(props){


  const [data,setdata] = React.useState({})
  const [arr,setArr]=React.useState([])
  const [id,setid]=React.useState(1)
  

  const handaleChange = (e) => {
  let name = e.target.name
  if (name==="name"){
  setdata({...data,name:e.target.value});
  }
  else if(name==="price"){
    setdata({...data,price:e.target.value});
  }
  else if(name==="credit"){
    setdata({...data,credit:e.target.value});
  }
}
 const  handleclick=()=>{
  const newdata=({id,...data})
     setArr([...arr,newdata])
     setid(id+1)
  }

//   const Project1=data.map((item)=>{
//   <card
//     key={item.id}
//     name={item.name}
//     price={item.price}
//     credit={item.credit}
//  />
 
 const handleRemove = (index) => { 

   const updatedArr = [...arr];
   updatedArr.splice(index, 1);
   setArr(updatedArr);
 };

 const handleEdit = (id) => {
   const itemToEdit = arr.find(item => item.id === id);
   setname(itemToEdit);
   setIsEditing(true); // true is set for editing 
   setEditId(id);// id is store the id in seteditid
 };

    

  console.log('Array',arr)
  return (
    <>
      <div className="rara">
<Project/>
    <div className="raa">
        <label>name</label>
        <input type="name"  name="name" onChange={handaleChange} value={data.name}></input><br></br><div></div>
        {/* <label>date</label>
        <input type="date" name="date" value={Data.date}></input> */}
        <label>price</label>
        <input type="price" name="price" onChange={handaleChange} value={data.price} placeholder="price"></input><br></br>
        <label>experesion</label>
        <input type="credit" name="credit" onChange={handaleChange} value={data.credit} placeholder="credit/debit"></input>
        <br></br>

      
        <button type="button" class="btn" onClick={handleclick}>Submit</button>

        <button type="button" class="btn" onClick={()=>{props.chekloging()}}>BACK</button>
      </div>
      <div className="card">
        {arr.map((item) => (
          <div className="card" style={{width: "250px"}} key={item.id}>
            <h5>{item.name}</h5>
            <p>name: {item.name}</p>
            <p>price: {item.price}</p>
            <p>credit: {item.credit}</p>
            
            <button className="btn btn-danger" onClick={() => handleRemove(item.index)}>Remove</button>
            <button className="btn btn-secondary"onClick={() => handleEdit(item.id)}>Edit</button>
          </div>
        ))}
      </div>







      </div>
    </>
  )}

export default Project1;