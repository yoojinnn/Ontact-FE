import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const S = {
  NavLink: styled(NavLink)`
    color: #f0adad;
    font-size: 23px;
    padding-left: 15px;
    padding-right: 15px;
    &:hover {
      color: #f0adad;
    }
    &.${(props) => props.activeClassName} {
      text-decoration: underline;
    }
  `,
  h1: styled.div`
    text-align: center;
    font-size: 50px;
    bottom: 100px;
    color: #ffffff;
    text-shadow: 0 0 5px #91a4cc, 0 0 7px #91a4cc;
    font-weight: bold;
  `,
};
