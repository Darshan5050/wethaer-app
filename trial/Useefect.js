import React, { Useefect } from "react";
function Useefect(){
    const[name,setname]= React.useState("")
    const[password,setpassword]= React.useState("")
}
UseEffect(()=>{
    console.log("useEffect")
},[name])



return(
    <>
    <div>
        <label>name</label>
        <input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)}></input>
        <label>password</label>
        <input type="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)}></input>
       
    </div>
    </>
)
export default Useefect;