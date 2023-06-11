import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useContext } from 'react';
import { Bookcontext } from '../contexts/BookContext';
export default function DeleteDialog({props}) {
    const [open, setOpen] = React.useState(false);
    const{removeBook}= useContext(Bookcontext);
    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (id) => {
    removeBook(id);
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen} style={{color:'black', background:'red'}}>
        حذف
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>مشخصات کتاب</DialogTitle>
        <DialogContent>
            آیا اطمینان دارید؟
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>انصراف</Button>
          <Button onClick={()=>handleSubmit(props.id)}>ثبت</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
