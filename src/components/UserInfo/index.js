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
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const userInfo = {
  twitter_id: 'SANDEUL920320',
  name: '삼돌',
  description: '나야~🎵',
  user_created: '2011-04-19',
  followers: 589340,
  friends: 6,
  profile_img: 'https://pbs.twimg.com/profile_images/1297847545289306113/H4xVZYcG_400x400.jpg',
};

function UserInfo() {
  const classes = useStyles();
  const [user, setUser] = useState({});

  useEffect(() => {
    // setUser(userInfo);
    const fetchData = async () => {
      const response = await getUserInfo(localStorage.getItem('userId'));
      setUser(response.data.data[0]);
    };
    fetchData();
  }, []);

  return (
    <S.AppHeader>
      <S.Header>사용자 정보</S.Header>
      <div>
        <Avatar src={user.profile_img} alt="" className={classes.large} />
        <h2>
          {/* <a href={result.html_url} target="no_rel">
            {result.name}
          </a> */}
          {user.name}
        </h2>
      </div>
      <p>@{user.twitter_id}</p>
      <p>
        Bio:
        <br />
        {user.description}
      </p>
      <p> created at : {user.user_created}</p>
    </S.AppHeader>
  );
}

export default UserInfo;
