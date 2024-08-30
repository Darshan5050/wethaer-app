import { useEffect } from "react";
import exios from'exios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Show=(props)=>{
    useEffect(()=>{
        console.log("in useeffect")
        exios.get('https://fakestoreapi.com/products')
        .then(res=>{
            props.Showdata(res.data)
        })
        .catch((err)=>{
            console.log("erro",err)

        })
        return()=>{
            console.log("in return")
            props.Showdata([])
        }
},[])
return(
    <>
    <div>
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
        {props.data.map((item, index) => (
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
</>
        );
        }
        export default Show;