import * as React from 'react';

import { useNavigate } from 'react-router-dom';

 function Login1() {

    let Navigate=useNavigate()
return(

<>

    <label>name</label>
    <input type='name' className='name' name='name'></input><br></br>
    <label>password</label>
    <input type='password' className='password' name='password'></input>
<button onClick={()=>{Navigate('/Register1')}} >Loging to register</button>
    
</>
   
  );
}
export default Login1;
