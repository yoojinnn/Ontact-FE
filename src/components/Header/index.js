import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  const navbarStyle = { justifyContent: 'space-between', paddingRight: '3rem' };
  const navbrandStyle = { fontSize: '38px', marginLeft: '3rem' };
  const navlinkStyle = { color: '#f0adad', fontSize: '23px', padding: '15px' };

  return (
    <Navbar bg="light" variant="light" style={navbarStyle}>
      <NavLink to="/">
        <Navbar.Brand href="/home" style={navbrandStyle}>
          ONTACT
        </Navbar.Brand>
      </NavLink>
      <Nav>
        <NavLink style={navlinkStyle} to="/thermometer">
          온도계
        </NavLink>
        <NavLink style={navlinkStyle} to="/calendar">
          온도캘린더
        </NavLink>
        <NavLink style={navlinkStyle} to="/temperature-variant">
          온도변화
        </NavLink>
        <NavLink style={navlinkStyle} to="/user-info">
          내정보
        </NavLink>
        <NavLink style={navlinkStyle} to="/">
          검색
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default Header;
