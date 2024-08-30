import * as React from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
// import { DialogContentText } from '@mui/material';


 function Form12() {
  const [data, setData] = React.useState({})

  const [open, setOpen] = React.useState(false);
  const [arr,setArr] = React.useState([])

  const id = React.useRef(0); 
  const [isEditing, setIsEditing] = React.useState(Boolean);
  const [editId, setEditId] = React.useState(); 


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handaleChange = (e) => {
    let name = e.target.name;
    setData({ ...data, [name]: e.target.value })     
}


  const insertproduct = (id) => {
    if (isEditing) {   
      const updatedArr = arr.map(item =>
        item.id === editId ? { ...data, id: editId } : item
      )
      setArr(updatedArr);
      setIsEditing(false);
      setEditId(null);
    } else {  
      id.current += 1; 
      const newData = { ...data, id: id.current };  
      setArr([...arr, newData]);  
    }
    setData({});  
  }


  const handleRemove = (index) => { 

    const updatedArr = [...arr];
    updatedArr.splice(index, 1);
    setArr(updatedArr);
  };
  const handleEdit = (id) => {
    const itemToEdit = arr.find(item => item.id === id);
    setData(itemToEdit);
    setIsEditing(true); 
    setEditId(id);
  };
  console.log(data)

  return (
    <>
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>form</DialogTitle>
        <DialogContent><div>
       
              <label for="name">name</label>
             <input type='text' name='text' ></input><br></br>
             <label for="price" name="price">price</label>
             <input type="price"></input><br></br>
             <label for="password">password</label>
             <input type='password' name='password'></input></div>
             </DialogContent>
                

             <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <div class="col-12">    
                <button type="submit" class="btn btn-primary" 
                onClick={()=>
                   {insertproduct(id)

                  }}

                style={{marginLeft:'270px'}}>{isEditing ? "Update" : "Submit"} </button>
              </div>
              
        </DialogActions>
        </Dialog>
        </React.Fragment>

        <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputEmail4" name="name" value={data.name} onChange={handaleChange}/>              </div>
             <div class="col-md-6">               <label for="inputPassword4" class="form-label">Date</label>              <input type="date" class="form-control" id="inputPassword4" name="date" value={data.date} onChange={handaleChange}/>
            </div><br/>
             <div class="form-check">        <input class="form-check-input" type="radio" name="money" id="flexRadioDefault1" value={"Credit"} onChange={handaleChange} />
         <label class="form-check-label" for="flexRadioDefault1">
           Credit
         </label>
      </div> <br />       <div class="form-check">
         <input class="form-check-input" type="radio" name="money" id="flexRadioDefault2" value={"Dabit"} onChange={handaleChange} />
        <label class="form-check-label" for="flexRadioDefault2">
          Dabit
        </label>
        </div><br/>
        <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Amount</label>
                <input type="text" class="form-control" id="inputEmail4" name="amount" value={data.amount} onChange={handaleChange}/>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Details</label>
                <input type="text" class="form-control" id="inputPassword4" name="details" value={data.details} onChange={handaleChange}/> 
            </div>




              <div className="d-flex flex-row mb-5 ">
        {arr.map((item) => (
          <div className="card" style={{width: "250px"}} key={item.id}>
            <h5>{item.name}</h5>
            <p>Date: {item.date}</p>
            <p>Type: {item.money}</p>
            <p>Amount: {item.amount}</p>
            <p>Details: {item.details}</p>
            <button className="btn btn-danger" onClick={() => handleRemove(item.index)}>Remove</button>
            <button className="btn btn-secondary"onClick={() => handleEdit(item.id)}>Edit</button>
          </div>
        ))}
      </div>


</>
     
  );
}
export default Form12;

  
            

    




