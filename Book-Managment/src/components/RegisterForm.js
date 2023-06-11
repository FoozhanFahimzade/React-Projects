import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useContext } from 'react';
import { Bookcontext } from '../contexts/BookContext';
export default function FormDialog() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [open, setOpen] = React.useState(false);
    const{addBook}= useContext(Bookcontext);
    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    //e.preventDefault();
    addBook(title, author, price);
    setAuthor("");
    setTitle("");
    setPrice("");
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen} style={{color:'black', background:'pink'}}>
        ثبت کتاب
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
          <Button onClick={handleSubmit}>ثبت</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
