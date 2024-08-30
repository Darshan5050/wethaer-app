import React from "react"
function Project(props){
    const[data,setdata]=React.useState({})

const handaleChange=(e)=>{
    let search=e.target.email;
    setdata({...data,[search]:e.target.value})
}
const handaleClick=()=>{
    console.log(data)
}


return(

<>

<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button type="button" class="btn" onClick={handaleClick}>Submit</button>

<button type="button" class="btn" onClick={()=>{props.chekloging()}}>ADD</button>  </form>
  </div>
</nav>
</>

);
}
export default Project;