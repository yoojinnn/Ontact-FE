import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import { S } from './style';
import WarningDialog from '../WarningDialog';

function Search({ changeSearch }) {
  const history = useHistory();
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
        background: '#ce11260D',
        height: '100%',
        position: 'absolute',
        top: 0,
        width: '100%',
        paddingTop: '250px',
      }}
    >
      <div
        style={{
          display: 'flex',
          padding: '30px',
          margin: 'auto',
          maxWidth: 'fit-content',
        }}
      >
        <S.SearchWrapper>
          <S.SearchInput
            placeholder="트위터 아이디를 입력해주세요."
            onChange={changeHandler}
            onKeyPress={keyPressHandler}
          />
          <S.SearchButtom onClick={clickHandler}>
            <SearchIcon sx={{ color: '#666' }} />
          </S.SearchButtom>
        </S.SearchWrapper>
      </div>
      <WarningDialog open={open} handleClose={handleClose} text="아이디를 입력해주세요" />
    </div>
  );
}

export default Search;
