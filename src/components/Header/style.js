import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const S = {
  NavLink: styled(NavLink)`
    /* color: #f0adad; */
    color: white;
    font-size: 23px;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
      color: #f0adad;
      text-decoration: none;
      /* border-bottom: 2px solid #f0adad; */
    }
    &.${(props) => props.activeClassName} {
      color: #f0adad;
      /* border-bottom: 2px solid #f0adad; */
    }
    /* transition: color 2s; */
  `,
  h1: styled.div`
    text-align: center;
    font-size: 35px;
    bottom: 100px;
    color: #ffffff;
    text-shadow: 0 0 2px #f0adad, 0 0 3px #f0adad;
    font-weight: bold;
  `,
};
