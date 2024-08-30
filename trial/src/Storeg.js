import React from "react";
function Storeg (){



  

    const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

const handelchange = (e) => {
    let name = e.target.name
    if (name === "email") {
      setEmail(e.target.value)
    } else if (name === "password") {
      setPassword(e.target.value)}
    }
 const handaleClick=()=>{
  sessionStorage.setItem('email',email)
  sessionStorage.setItem('password',password)
 }
 const handaleClick=()=>{
   let name1= sessionStorage.getItem('email',email)
 let name2 =sessionStorage.getItem('password',password)
 }

    return(
        <>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" name="email"  onChange={(e)=>{
            handelchange(e) }} value={email}/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" name="password" onChange={(e)=>{
            handelchange(e);
            }} value={password}/>
            <button type="submit" name="submit" 
            onClick={()=>{localStorage.setItem("email",email);
            sessionStorage.setItem("password",password);}}
             >
                submit
            </button><br></br>
            <button type="submit" name="submit" onClick={()=>{
            
                let name1=sessionStorage.getItem('email');
              let name2= sessionStorage.getItem('password');
                console.log(name1)
                console.log(name2);}} >
                getItem
            </button>
            <button type="remove item"name="remove item" onClick={()=>{sessionStorage.removeItem('email')}}>
                remobve item
            </button>
            <button type="remove item"name="remove item" onClick={()=>{sessionStorage.clear()}}>
            clear data
            </button>
      </div>
      </>

      );
      }
      export default Storeg;