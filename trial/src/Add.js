import React from "react";
import{Navigate} from  "react-router-dom";

function Add(props){
    const isAuth =()=>{
        return false
    }

    return(<>
       

       {isAuth()?props.children:<Navigate to='/Home'/>}
    </>

           )
}
export default Add;