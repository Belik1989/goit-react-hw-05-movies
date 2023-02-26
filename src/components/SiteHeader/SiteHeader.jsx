import React from 'react';
import {
  Container,
  Header,
  LinkStyled,
} from 'components/SiteHeader/SiteHeader.styled';
// import { Link } from 'react-router-dom';
import { paths } from 'router/paths';

export const SiteHeader = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkStyled to={paths.home} end>
            Home
          </LinkStyled>
          <LinkStyled to={paths.movies}>Moves</LinkStyled>
        </nav>
      </Header>
    </Container>
  );
};
