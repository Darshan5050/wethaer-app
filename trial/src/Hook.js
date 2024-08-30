import React from 'react';

function Hook(){
    const[count,setCount]=React.setCount(0)
    const handleClicked=(type)=>{
        if(type==='inc'){
            setCount(count+1)
        }
         else {
            setCount(count-1)
        }
  
};
    
        return(
            <>
            
          
                    <button onClick={()=>{
                        handleClicked('inc')}}>
                                Increment 
                            </button>
                            {count}
                            <button onClick={()=>{handleClicked('dec')}}>
                                Decrement 
                            </button>

            </>
        );

}
export default Hook;