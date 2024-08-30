import React, { useCallback } from "react";
import Callback from './Callback'
import Callfun from "./Callfun";

function Callvalue(){
    const[age,setage]=React.useState(18)
    const[sal,setsal]=React.useState(25000)

    const incage=useCallback(()=>{
        setage(age+1)
    },[age])

    const incsal=useCallback(()=>{
        setsal(sal+5000)
    },[sal])
    return(
        <>
        <div>
            <Callback value={age} text="age"/>
            <Callfun text="age" incClick={incage}/>
            <Callback value={sal} text="sal"/>
            <Callfun text="sal" incClick={incsal} />
        </div>
        </>
    )
}
export default Callvalue;