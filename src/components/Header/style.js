import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const S = {
  NavLink: styled(NavLink)`
    color: #f0adad;
    font-size: 23px;
    padding: 15px;
    &:hover {
      color: #f0adad;
    }
    &.${(props) => props.activeClassName} {
      text-decoration: underline;
    }
  `,
};
