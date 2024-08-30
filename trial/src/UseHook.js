import React from "react";
import Usecalc from"./Usecalc";

function UseHook(){
    
   const [A,B,setA,setB,Ans,setAns,sum,sub]=Usecalc()


    return(
<>
<div>
<label>a</label>
<input onChange={(e)=>{setA(parseInt(e.target.value))}}></input>
<label>b</label>
<input  onChange={(e)=>{setB(parseInt(e.target.value))}}></input>
<button
 onClick={()=>{sum()}}  >sum</button>
<button onClick={()=>{sub()}}>sub</button>
{Ans}
</div>
</>
    )
}export default UseHook;