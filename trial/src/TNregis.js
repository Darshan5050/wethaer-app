import React from "react";
function TNregis(props){
        const[data,setdata]=React.useState({})

        const handaleChange=(e)=>{
            let email=e.target.email;
            setdata({...data,[email]:e.target.value})
        }
        const handaleClick=()=>{
            console.log(data)
        }


      return (
        
          <div className="rara">
    
            {/* // name  */}
    
            <div class="rar">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={handaleChange} />
            </div>
            {/* // password  */}
    
            <div>
              <label for="inputPassword5" class="form-label">Password</label>
              <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="password" value={data.password} onChange={handaleChange} />
            </div>

            <button type="button" class="btn" onClick={handaleClick}>Loging</button>  
              <button type="button" class="btn" onClick={props.cheklogin()}>registrestion</button>

            </div>
      )
    }
export default TNregis;