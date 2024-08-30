import React from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import Box from '@mui/material/Box';


const Apitable = () => {
    const[data,setdata]=React.useState([])
    const [loding,setLoding]=React.useState(false)
    useEffect(()=>{
     
      
   },[data])
    const handleclick=()=>{
    setLoding(true)
        
       axios.get('https://fakestoreapi.com/products')
       .then(response => {
        // console.log(response.data,response);
        setdata(response.data)   // setdata coment this aeklu loding aave 
        //setLoding(response.data,false) // aa setdata comment kriye to aam syntex hoy 
        setLoding(false)// aa set data difine hoy and kro to aave aana thi data aavta loding btave psi second ma data btave 
       })
       .catch(error => {
        // console.error(error,error);
       })
     }


    console.log("DATA",data)
  return (
    <> 
    {loding ? (<div>    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>

</div>):
             
        <div>
<button onClick={handleclick}>
    Click Me
</button>


<TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>title</TableCell>
              <TableCell>price</TableCell>
              <TableCell>discription</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.description}</TableCell>
                {/* <TableCell align="right">
                  <Button onClick={() => startUpdate(index)}>Update</Button>
                  <Button onClick={() => deleteItem(index)}>Delete</Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
</div>
  

}
</>
)
}

export default Apitable;