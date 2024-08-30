import React from "react";


function Memo2(){
    console.log("Memo2 Called")
    return(
        <div>name</div>
    )
}
export default React.memo(Memo2);