import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { S } from './style';
import { searchUser } from '../../api';

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

function Search() {
  const history = useHistory();
  const classes = useStyles();
  const formStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
  const [userId, setUserId] = useState('');

  const changeHandler = ({ target }) => setUserId(target.value);

  const clickHandler = async () => {
    const a = await searchUser(userId);
    console.log(a);
    history.push('/thermometer');
  };

  return (
    <div>
      <S.h1>Ontact</S.h1>
      <form style={formStyle} className={classes.root} noValidate autoComplete="off">
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
  );
}

export default Search;
