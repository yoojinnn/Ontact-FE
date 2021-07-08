import React from 'react';
import { S } from './style';
import { getUserInfo } from '../../api/twitter';

function UserInfo() {
  const clickHandler = async () => {
    const response = await getUserInfo('Sso_418');
    console.log(response);
  };

  return (
    <S.AppHeader>
      <S.Header>사용자 정보</S.Header>
      <button onClick={clickHandler}>검색</button>
    </S.AppHeader>
  );
}

export default UserInfo;
