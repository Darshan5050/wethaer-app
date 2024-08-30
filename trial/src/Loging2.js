import React from "react";

function Loging2(){
    const[data,setdata]=React.useState({})
    

const handelchange=(e)=>{
    let name=e.target.name;
    if(name=="email"){
        setdata({...data,emali:e.target.value})
    }

    else if(name=="password"){
        setdata({...data,password:e.target.value})
    }}

    return(
        <>
    
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" name="email"  on onChange={(e)=>{
            handelchange(e) }}value={data.emali}/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" name="password" onChange={(e)=>{
            handelchange(e)}} value={data.password}/>
            <button name="submit" type="submit" onClick={()=>{JSON.stringify(data)}}>submit</button>

<button type="getitem" name="getitem" onClick={()=>{
    let name1=localStorage.getItem('email');
    let name2=  localStorage.getItem('password');
      console.log("data",JSON.stringify(name1))
      console.log("data",JSON.stringify(name2))
}}>
    get item
</button>
      </div>

    
      </>
    )}
    export default Loging2;