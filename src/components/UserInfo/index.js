import React, { useEffect, useState } from 'react';
import { S } from './style';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { getUserInfo } from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

function UserInfo() {
  const classes = useStyles();
  const [user, setUser] = useState({});

  useEffect(() => {
    // setUser(userInfo);
    const fetchData = async () => {
      const response = await getUserInfo(localStorage.getItem('userId'));
      console.log(user.twitter_id);
      setUser(response.data.data[0]);
    };
    fetchData();
  }, []);

  return (
    <S.AppHeader>
      <S.Header>사용자 정보</S.Header>
      <div
        style={{
          fontSize: '25px',
          textAlign: '-webkit-center',
          padding: '30px',
          margin: '10px',
          boxShadow: '0 1px 5px rgba(0,0,0,0.5)',
        }}
      >
        <Avatar
          src={user.profile_img}
          style={{ marginBottom: '10px' }}
          alt=""
          className={classes.large}
        />
        <h2>
          <a
            href={user.twitter_user_url}
            style={{
              textDecoration: 'none',
            }}
            target="no_rel"
          >
            {user.name}
          </a>
        </h2>

        <p>@{user.twitter_id}</p>
        <p>
          Bio:
          <br />
          {user.description}
        </p>
        <p> created at : {user.user_created}</p>
      </div>
    </S.AppHeader>
  );
}

export default UserInfo;
