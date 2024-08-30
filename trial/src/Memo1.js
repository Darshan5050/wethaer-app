import React from "react";


function Memo1(props){
    console.log("Memo1 Called")
    return(
        <div>name{props.name}</div>
    )
}
export default React.memo(Memo1);