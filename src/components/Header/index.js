import React from 'react';
import { S } from './style';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.png';

function Header({ search }) {
  return (
    <Navbar
      bg="light"
      variant="light"
      style={{ justifyContent: 'space-between', paddingRight: '3rem' }}
    >
      <S.NavLink to="/">
        <Navbar.Brand href="/home" style={{ marginLeft: '30px' }}>
          <img src={logo} width="170" height="55" alt="Logo" />
        </Navbar.Brand>
      </S.NavLink>
      <Nav>
        {!search ? (
          <S.NavLink exact to="/">
            온도계
          </S.NavLink>
        ) : (
          <S.NavLink activeClassName="selected" to="/thermometer">
            온도계
          </S.NavLink>
        )}
        {!search ? (
          <S.NavLink exact to="/">
            온도캘린더
          </S.NavLink>
        ) : (
          <S.NavLink activeClassName="selected" to="/calendar">
            온도캘린더
          </S.NavLink>
        )}
        {!search ? (
          <S.NavLink exact to="/">
            온도변화
          </S.NavLink>
        ) : (
          <S.NavLink activeClassName="selected" to="/temperature-variant">
            온도변화
          </S.NavLink>
        )}
        {!search ? (
          <S.NavLink exact to="/">
            내정보
          </S.NavLink>
        ) : (
          <S.NavLink activeClassName="selected" to="/user-info">
            내정보
          </S.NavLink>
        )}
        <S.NavLink exact activeClassName="selected" to="/">
          검색
        </S.NavLink>
      </Nav>
    </Navbar>
  );
}

export default Header;
