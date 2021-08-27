import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: { minWidth: '500px' },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    fontFamily: 'NanumBarunPenR',
    fontSize: 20,
  },
}));

function WarningDialog() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      classes={{ paper: classes.paper }}
    >
      <DialogTitle
        id="alert-dialog-title"
        disableTypography="true"
        classes={{ root: classes.title }}
      >
        <WarningRoundedIcon style={{ fontSize: 40 }} />
        {'경고'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" classes={{ root: classes.content }}>
          아이디를 입력해주세요
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus classes={{ root: classes.content }}>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default WarningDialog;
