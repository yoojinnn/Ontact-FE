import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { S } from './style';
import bg from '../../images/background1.png';
import WarningDialog from '../WarningDialog';

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
}));

function Search({ changeSearch }) {
  const history = useHistory();
  const classes = useStyles();
  const formStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
  const [userId, setUserId] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const changeHandler = ({ target }) => setUserId(target.value);

  const clickHandler = async () => {
    localStorage.setItem('userId', userId);
    if (userId === '') {
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
      <WarningDialog open={open} handleClose={handleClose} text="아이디를 입력해주세요" />
    </div>
  );
}

export default Search;
