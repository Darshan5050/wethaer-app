import React from "react";
//import Box from '@mui/material/Box';

// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
// import { convertLength } from "@mui/material/styles/cssUtils";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Whether(){
    const [data, setData] = React.useState({ });
  
    

    const handleChange = (e) => {
        let name = e.target.name;
        setData({ ...data, [name]: e.target.value });     
    }

    const handleClick = () => {
        // setDataArray([...dataArray, data]);
        // console.log([...dataArray, data]);
        const apiKey='5f114b623b2c42d49c3102625230807';
        // console.log(data.city,"\nhello")
       
        axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${data.titel}&aqi=no`)
        .then((res)=>{
            console.log(res)

            setData(res.data)
        })
        .catch((err)=>{
            console.log('error',err)
        })
    }
    console.log(data.titel)
    return(
        <>
        <div class="rar">
    
        
            <div className="cs">
          <input type="text"  name="titel" value={data.titel} onChange={handleChange} />
          </div>
          <br/>

         

        
          {/* <Button variant="contained">Get</Button>  */}
          <div class="sc">
          <Button variant="contained" onClick={handleClick}>post</Button> 
          </div>
          


{data.location&&data.current&&(
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia className="rp"
          component="img"
          height="140"
       
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Whether
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Region:{data.location.region}
            <br/>
            country:{data.location.country}
            <br/>
            humidity:{data.current.humidity}
            <br/>
            temperature:{data.current.temp_c}
            <br/>
            temperature:{data.current.temp_f}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
)}


          
    
         
        </div>
        </>
    );
}

export default Whether;