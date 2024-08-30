import React, { useRef } from "react";
function Use(){
    let ref1=useRef();
    const handelclick=()=>{
        
        ref1.current.style="border:2px solid green";
        ref1.current.value="darshan"
      
    }
    return(
        <>
        
        <div className="dar">
            <label>name</label>
            <input  type="text" ref={ref1} className="text"></input><br></br>
            <label>email</label>
            <input type="email" className="email"></input><br></br>
            <label>mobile no.</label>
            <input type="text"></input>
            <label>adress</label>
            <input type="adress" className="daress"></input>
            <button onClick={handelclick}>click</button>
        </div>
        </>
    )

}export default Use;