import React, { useState } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { S } from './style';
import bg from '../../images/background1.png';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
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

function Search({ changeSearch }) {
  const history = useHistory();
  const classes = useStyles();
  const formStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
  const [userId, setUserId] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeHandler = ({ target }) => setUserId(target.value);

  const clickHandler = async () => {
    localStorage.setItem('userId', userId);
    if (userId === '') {
      handleClickOpen();
    } else if (userId === null) {
      handleClickOpen();
    } else {
      changeSearch();
      history.push('/thermometer');
    }
  };

  const keyPressHandler = () => {
    if (window.event.keyCode === 13) {
      clickHandler();
    }
  };

  return (
    <div
      style={{
        paddingTop: '140px',
        backgroundImage: 'url(' + bg + ')',
        backgroundSize: 'cover',
        height: '100vh',
        color: '#f5f5f5',
      }}
    >
      <div
        style={{
          background: 'whitesmoke',
          padding: '30px',
          margin: 'auto',
          maxWidth: 'fit-content',
          border: '1px solid black',
          borderRadius: '10px',
        }}
      >
        <S.h1>Ontact</S.h1>
        <form
          onKeyPress={keyPressHandler}
          style={formStyle}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-search"
            label="Twitter_id"
            type="search"
            variant="outlined"
            onChange={changeHandler}
          />
          <Button variant="contained" color="primary" onClick={clickHandler}>
            검색
          </Button>
        </form>
      </div>
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
          <Button
            onClick={handleClose}
            color="primary"
            autoFocus
            classes={{ root: classes.content }}
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Search;
