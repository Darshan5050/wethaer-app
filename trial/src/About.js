import React from "react";
import {useNavigate } from "react-router-dom";
function About(){
    let Navigate=useNavigate()

    

    return(
        <>
        <button onClick={()=>{Navigate('/Home')}} >about to home</button>
        
        </>
    )
}
export default About;