import React from "react";

function Callfun(props){
    console.log("fun calledd",props.text)
    return(
        <button onClick={()=>{
            props.incClick()

        }}>
            inc{props.text}
        </button>
    )
}
export default React.memo (Callfun);