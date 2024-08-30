import React from 'react'
function name(props) {
    console.log("props",props)
    return(
        <div>hello{props.name}
        <p>select {props.couse}</p>

        </div>
    )
    
}
return(
    <>

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

  </>
)

