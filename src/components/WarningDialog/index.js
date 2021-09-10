import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';

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

function WarningDialog({ open, handleClose, text }) {
  const classes = useStyles();

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
          {text}
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
