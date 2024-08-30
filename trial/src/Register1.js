import * as React from 'react';

import { useNavigate } from 'react-router-dom';

function Register1 () {
    let Navigate=useNavigate()
  return (
    <>
    <div>

        <label>name</label>
      <input type='text' id="name" label="name" variant="name" /><br></br>
      <label>email</label>
      <input type='text' className='text'></input><br></br>
      <label>paswword</label>
      <input type='password' id="password" label="password" variant="password" /><br></br>
      <label>mobile No.</label>
      <input type='mobileno' className='mobileno'></input><br></br>
      
    <button onClick={()=>{Navigate('/Login1')}}>register to Loging</button>
    </div>
    </>
  );
}
export default Register1;