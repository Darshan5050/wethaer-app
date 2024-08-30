import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";

function Post(){
    const [data, setData] = React.useState({});
    const [dataArray, setDataArray] = React.useState([]);

    const handleChange = (e) => {
        let name = e.target.name;
        setData({ ...data, [name]: e.target.value });     
    }

    const handleClick = () => {
        // setDataArray([...dataArray, data]);
        // console.log([...dataArray, data]);

        axios.put('https://fakestoreapi.com/products/20',data)
        .then((res)=>{
            console.log('resorce',res.data)
        })
        .catch((err)=>{
            console.log('error',err)
        })
    }
 console.log(data)
    return(
        <>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <lable>title:</lable>
          <TextField id="outlined-basic" label="title" variant="outlined" type="text" name="title" value={data.title} onChange={handleChange} />
          <br/>
          <lable>price:</lable>
          <TextField id="outlined-basic" label="price" variant="outlined" type="text" name="price" value={data.price} onChange={handleChange}/>
          <br/>
          <lable>description:</lable>
          <TextField id="outlined-basic" label="description" variant="outlined" type="text" name="description" value={data.description} onChange={handleChange}/>
          <br/>
          <lable>image:</lable>
          <TextField id="outlined-basic" label="image" variant="outlined" type="text" name="image" value={data.image} onChange={handleChange}/>
          <br/>
          <lable>category:</lable>
          <TextField id="outlined-basic" label="category" variant="outlined" type="text" name="category" value={data.category} onChange={handleChange}/> 
        </Box>

        <Stack spacing={2} direction="row">   
          {/* <Button variant="contained">Get</Button>  */}
          <Button variant="contained" onClick={handleClick}>post</Button> 
          
          
        </Stack>
         
        
        </>
    );
}

export default Post;