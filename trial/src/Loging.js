import React from "react";

function Loging(){
        const[email,setemail]=React.useState(" evhvehb");

        const handelchange=(event)=>{
            let name=event.target.name;
            if(name=="email"){
                setemail(event.target.value);}
                else if(name==select){
                setselect(event.target.value)}
                
            }
    
        const handelclick=()=>{
            console.log(email)
            console.log(select)
        }
        
    return(
            <>
            <div className="div">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
             oneChange={(e)=>{handelchange(e)}}
            type="email"
             class="form-control"
             value={email}
             name ="email"/>  


            <select
            class="from-select"
            aria-label="Default aria"
            value={select}
            name="select"
            />




            </div>

            </>



    );
}
export default Loging;