import React from "react";

function Newfile(){
    const[data,setdata]=React.useState({})
    const[chekbox,setchekbox]=React.useState("")
    const[update,douptdet]=React.useState(true)
    

    const handelchange=(e)=>{
        let name=e.target.name;
        if(name=="email"){
            setdata({...data,emali:e.target.value})
        }

        else if(name=="password"){
            setdata({...data,password:e.target.value})
        }
        else if (name=="select"){
          setdata({...data,select:e.target.value})
        }
        
        else if(name=="checkbox"){
          let arr=chekbox
        if(arr.includes(e.target.value)){
          arr.splice(arr.indexOf(e.target.value),1)
        }
        else{arr.push(e.target.value  )}
        setchekbox(arr)
        douptdet(!update)
        }

    }
    // const handelchange=(e)=>{
    //   let name=e.target.name;
    //   let value=e.target.value;
    //   let select=e.target.select;
    //   setdata({...data,[name]:value})
    // setdata({...data,[name]:value})
    // }
return(
    <>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email"  on onChange={(e)=>{
        handelchange(e) }}value={data.emali}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" onChange={(e)=>{
        handelchange(e)}} value={data.password}/>
  </div>
  
  <select class="form-select" aria-label="Default select example" name="select" onChange={(e)=>{handelchange(e)}} value={data.select}>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>


<div class="form-check">
  <input class="form-check-input" name="checkbox" onChange= {handelchange} checked={chekbox.includes("10th")}/>
  <label class="form-check-label">
    10th
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" name="checkbox" onChange={handelchange} value={"12th"} checked={chekbox.includes("12th")}/>
  <label class="form-check-label" for="flexCheckChecked">
    12th
  </label>
</div>
      
  
  <button type="submit" name="submit"onClick={(e)=>{
  console.log(data)}} >Submit</button>
</form>
    </>
);

}
export default Newfile;
