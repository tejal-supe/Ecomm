import React, { useEffect, useState } from 'react'
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../app/store';
import { showToastMessage } from '../../redux/toastMessage';


const ToastMessageUi = () => {
    const count = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();
  console.log('in toast message, ',count.value);
  

    const handleClose = (
      event: React.SyntheticEvent | Event,
      reason?: string
    ) => {
      if (reason === "clickaway") {
        return;
      }

      dispatch(showToastMessage({value:false,message:"null"}))
  };
  useEffect(() => {
    console.log('in effcet');
    
  },[count.value])

    const action = (
      <>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </>
    );
  return (
    <>
           <Snackbar
        open={count.value}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}  
        onClose={handleClose}
        message={count.message}
        action={action}
      />
    </>
  );
}

export default ToastMessageUi