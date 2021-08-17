import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { S } from './style';
import bg from '../../images/background1.png';

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

  const changeHandler = ({ target }) => setUserId(target.value);

  const clickHandler = async () => {
    changeSearch();
    localStorage.setItem('userId', userId);
    history.push('/thermometer');
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
    </div>
  );
}

export default Search;
