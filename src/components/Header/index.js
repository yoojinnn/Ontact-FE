import React from 'react';
import { S } from './style';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header({ search }) {
  return (
    <Navbar
      variant="light"
      style={{
        justifyContent: 'space-between',
        paddingRight: '2rem',
        paddingBottom: 0,
        paddingTop: 0,
        backgroundColor: '#666',
        zIndex: 1,
        // borderBottom: '1px solid #eee',
        // boxShadow: 'rgb(0 0 0 / 5%) 0px 4px 8px 0px, rgb(0 0 0 / 5%) 0px 6px 20px 0px',
      }}
    >
      <NavLink to="/">
        <Navbar.Brand href="/home" style={{ marginLeft: '30px' }}>
          <S.h1>Ontact</S.h1>
        </Navbar.Brand>
      </NavLink>
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
            사용자정보
          </S.NavLink>
        ) : (
          <S.NavLink activeClassName="selected" to="/user-info">
            사용자정보
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
