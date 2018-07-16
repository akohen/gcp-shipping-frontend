// @flow

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from '../style';

const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #dce0e0;
  line-height: 45px;
  height: 45px;
  padding: 10px 50px;
`;

const LinkItem = styled.li`
  display: inline;
  margin: 20px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${theme.secondary};
  &:hover {
    color: ${theme.primary};
  }
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  vertical-align: middle;
  padding-bottom: 2px;
`;

const Links = styled.ul`
  margin: 0px;
  display: inline;
  padding-left: 20px;
`;

const Component = () => (
  <Header>
    <span>
      <Link to="/"><Logo src="crates.png" alt="GCP" /> Galactic Crate Pushers</Link>
    </span>
    <Links>
      <LinkItem>
        <Link to="/">Ship something !</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/about">About</Link>
      </LinkItem>
    </Links>
  </Header>
);

export default Component;
