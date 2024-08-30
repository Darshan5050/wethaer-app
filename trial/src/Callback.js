import React from "react";

function Callback(props){
    console.log("value rerender",props.text)

    return(
        <div>
            {props.text}{props.value}
        </div>
    )

}
export default  Callback;