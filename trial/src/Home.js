import React from "react";
import { useNavigate } from "react-router-dom";
function Home(){

    let Navigate=useNavigate()

    
    return(
        <>
        <button onClick={()=>{Navigate('/About')}}>home to about</button>
        <div>home</div>
        </>
    )

}
export default Home;