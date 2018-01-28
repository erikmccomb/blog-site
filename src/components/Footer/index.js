import React from 'react';
import { Segment, Container, Icon } from 'semantic-ui-react';
import Link from 'gatsby-link';

const Footer = () => (
  <Segment basic textAlign='right'>
    <Container>
      <a href='https://www.facebook.com/OneTrueErik' target="_blank"><Icon name='facebook' size='huge' /></a>
      <a href='https://twitter.com/ErikMccomb' target="_blank"><Icon name='twitter' size='huge' /></a>
      <a href='https://www.instagram.com/itserikwith_a_k/' target="_blank"><Icon name='instagram' size='huge' /></a>
      <a href='https://github.com/erikmccomb' target="_blank"><Icon name='github' size='huge' /></a>
    </Container>
  </Segment>
);

export default Footer;