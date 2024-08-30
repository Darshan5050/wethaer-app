
import React,{useMemo} from "react";


function Memo(){
const[A,setA]=React.useState(0);
const[B,setB]=React.useState(0);
const[ans,setans]=React.useState(0);

const sum=useMemo(()=>{
    setans(A+B)
},[A,B])
 
return(
    <div>
         <label>A</label>
         <input  onChange={(e)=>{setA(parseInt(e.target.value))}}></input>
         <label>B</label>
         <input  onChange={(e)=>{setB(parseInt(e.target.value))}}></input>
         {ans}
    </div>
)
}
export default Memo;