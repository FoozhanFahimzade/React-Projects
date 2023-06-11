import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useContext } from 'react';
import { Bookcontext } from '../contexts/BookContext';
export default function EditDialog({props}) {
    const [title, setTitle] = useState(props.title);
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [open, setOpen] = React.useState(false);
    const{editBook}= useContext(Bookcontext);

    
  
    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (id) => {
    setAuthor(author);
    setTitle(title);
    setPrice(price);
    editBook(id,title, author, price);
    
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen} style={{color:'black', background:'pink'}}>
        ویرایش
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>مشخصات کتاب</DialogTitle>
        <DialogContent>
          <TextField  value={title} onChange={(e) => setTitle(e.target.value)} label="نام کتاب" type="text" variant="standard"/>
          <TextField  value={author} onChange={(e) => setAuthor(e.target.value)} label='نام نویسنده' type="text" variant='standard'/>
          <TextField  value={price}  onChange={(e) => setPrice(e.target.value)} label='قیمت کتاب' type="number" variant='standard'/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>انصراف</Button>
          <Button onClick={()=>handleSubmit(props.id)}>ثبت</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
