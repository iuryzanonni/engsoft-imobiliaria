import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import Link from 'next/link'

const Container = styled.div`
  flex-grow: 1;
  margin-bottom:20px;
`;

const LinkText = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: inherit;
  padding: 1em;
`;

function Header() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link href="/">
            <LinkText >Index</LinkText>
          </Link>
          
          <Link href="/list">
            <LinkText >List</LinkText>
          </Link>
          
          <Link href="/register">
            <LinkText >Register</LinkText>
          </Link>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Header;