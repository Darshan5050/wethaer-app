import React from 'react';

function Count(){
const handelClicked=()=>{
    alert("clicked")
}

    
  
    
      
        
        
      const handleClick = () => {
        alert('click2')
    }
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <button onClick={() => {
                alert('clicked')
            }}>
                Click
            </button>
            <button onClick={() => {
                handleClick()
            }}>
                Clcik2
            </button>
            <input onChange={(e) => {
              console.log(e.target.value)
            }} />
            <input onChange={(e) => {
                handleChange(e)
             }}/>
        </div>


  
);
}
export default Count;