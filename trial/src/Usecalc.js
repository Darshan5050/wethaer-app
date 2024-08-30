import React from "react";
function Usecalc(){

    const[A,setA]=React.useState(0);
    const[B,setB]=React.useState(0);
    const[Ans,setAns]=React.useState(0);
        
    const sum=()=>{
        setAns(A+B)
    }

    const sub=()=>{
        setAns(A-B)
    }

    return(

        [A,B,setA,setB,Ans,setAns,sum,sub]
    
    )

}export default Usecalc;